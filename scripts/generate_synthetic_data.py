"""Generate synthetic demo CSVs without needing a running database.

Usage: python scripts/generate_synthetic_data.py [output_dir]
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

from app.services.synthetic_data import SyntheticDataGenerator  # noqa: E402


def main() -> None:
    output_dir = sys.argv[1] if len(sys.argv) > 1 else "./synthetic_data"
    os.makedirs(output_dir, exist_ok=True)

    generator = SyntheticDataGenerator(seed=2026)
    datasets = generator.generate_all()

    for name, df in datasets.items():
        path = os.path.join(output_dir, f"{name}.csv")
        df.to_csv(path, index=False)
        print(f"wrote {len(df)} rows to {path}")


if __name__ == "__main__":
    main()
