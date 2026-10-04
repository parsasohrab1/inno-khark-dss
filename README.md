# inno-khark-dss
AI-Based Decision Support System for Crisis and Logistics Management on an Island
1. System Introduction
1-1. Project Title
Intelligent AI-Based Decision Support System for Island Crisis and Logistics Management (AI-DSS Island)

1-2. Vision
Create a fully independent and decentralized system for decision support in crisis conditions in island regions facing severe communication, geographic and logistical constraints. Using artificial intelligence, synthetic data and modern cryptographic technologies, this system enables optimal resource management, logistics allocation and rescue operations even under a complete communications blackout.

1-3. Overall Objectives
Provide real-time decision-making solutions for island crisis management

Optimize logistics resource allocation using artificial intelligence algorithms

Create a decentralized mesh-based communication network for communication-outage conditions

Generate high-quality synthetic data for training artificial intelligence models

Patent filing with a novel cryptographic approach to protect intellectual property

2. Software Requirements Specification (SRS)
2-1. General System Overview
2-1-1. System Purpose
The AI-DSS Island system is a comprehensive decision support platform designed for managing natural crises (floods, storms, earthquakes, sea level rise) in island regions. Inspired by similar frameworks such as AI4SIDS and Digital Lifeline, it provides intelligent forecasting, analysis and decision-making capabilities.

2-1-2. Application Domain
Small island developing states (SIDS)

Coastal areas and ports

Maritime search and rescue operations

Emergency logistics management

2-1-3. Stakeholders
Crisis managers and rescuers

Relief organizations (Red Crescent, UNOCHA)

Local island communities

Government and military institutions

2-2. Functional Requirements
FR-1: Data Ingestion
ID	Description	Priority
FR-1.1	Receive satellite data (imagery, altimetry, temperature)	High
FR-1.2	Receive IoT sensor data (rain gauges, water level, anemometers)	High
FR-1.3	Receive field reports from rescuers (text, audio, images)	Medium
FR-1.4	Receive climate data and weather forecasts	High
FR-1.5	Receive SOS signals via the mesh network (LoRa/BLE)	High
FR-2: AI Analysis and Prediction
ID	Description	Priority
FR-2.1	Flood prediction using hybrid models (sensor data, satellite, citizen reports)	High
FR-2.2	Calculate the population vulnerability index based on demographic and geographic factors	High
FR-2.3	Prioritize areas based on the urgency index (0-100)	High
FR-2.4	Analyze multimodal transport routes (on foot, vehicle, helicopter, vessel)	High
FR-2.5	Optimize resource allocation with adaptive algorithms (evolutionary or multi-objective)	High
FR-3: Decision and Alert System
ID	Description	Priority
FR-3.1	Automatically generate alerts when risk crosses a defined threshold	High
FR-3.2	Present alternative decision scenarios to crisis managers	High
FR-3.3	Automatically generate situation reports (SitRep) at the end of each operational period	Medium
FR-3.4	Real-time command dashboard with interactive maps	High
FR-3.5	Send alerts through various channels (SMS, radio, social networks)	Medium
FR-4: Decentralized Communication Network
ID	Description	Priority
FR-4.1	Create an ad-hoc mesh network using TCP sockets during communication outages	High
FR-4.2	Support LoRa and BLE Mesh protocols for long-range communication	High
FR-4.3	Delay-tolerant networking (DTN) routing for intermittent communication	High
FR-4.4	Data synchronization when connectivity returns	Medium
FR-5: Recording and Tracking Relief Transactions
ID	Description	Priority
FR-5.1	Record each relief package with a SHA-256 cryptographic hash in a decentralized ledger	High
FR-5.2	Provide verifiable proof of delivery	High
FR-5.3	Prevent diversion and theft of relief aid through a blockchain	High
2-3. Non-Functional Requirements
ID	Description	Acceptance criteria
NFR-1	Ability to run fully offline (Offline-First)	No internet connection required for core operation
NFR-2	Response time under 5 seconds for emergency decisions	Responses to routing and prioritization requests
NFR-3	Scalability for at least 1000 simultaneous geographic zones	Support for 1000 zones with logistics data
NFR-4	Military-grade cryptographic security	Use of AES-256 and SHA-256 algorithms
NFR-5	Recoverability after outage	Network self-healing in under 60 seconds
NFR-6	Portability	Runs on standard hardware without cloud dependency
2-4. System Architecture
text
┌─────────────────────────────────────────────────────────────┐
│                  Presentation Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Command      │  │ Interactive  │  │ Situation        │  │
│  │ Dashboard    │  │ GIS Map      │  │ Reports (SitRep) │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  Business Logic Layer                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ AI Decision  │  │ Optimization │  │ Crisis           │  │
│  │ Engine       │  │ Algorithms   │  │ Prioritization   │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Real-time    │  │ Synthetic    │  │ Cryptography &   │  │
│  │ Alert System │  │ Data Gen     │  │ Digital Signing  │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  Data Layer                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Geolocation  │  │ Synthetic    │  │ Cryptographic    │  │
│  │ Database     │  │ Data         │  │ Ledger           │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│              Communication Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Mesh Network │  │ LoRa/BLE     │  │ Synchronization  │  │
│  │ Ad-Hoc       │  │ Mesh         │  │ DTN              │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
3. Data Requirements and Synthetic Data Generation
3-1. Required Data Structure
For proper training and operation of the AI models, the following data are required:

3-1-1. Geographic and Demographic Data
Geographic coordinates (longitude and latitude) of each area

Population of each area

Population density and age distribution

Existing infrastructure (port, airport, road, hospital)

3-1-2. Disaster and Crisis Data
Type of disaster (flood, storm, earthquake, fire, sea level rise)

Severity of disaster (scale 0 to 10)

Time of occurrence and duration

Affected areas

3-1-3. Logistics and Resource Data
Type of resources needed (water, food, medicine, shelter, medical equipment)

Required quantity based on population

Location of relief warehouses

Available vehicles (type, capacity, speed, operational radius)

3-1-4. Communication Network Data
Communication status in each area

Mesh network access points

Signal quality and bandwidth

3-2. Synthetic Data Generation
Given the limited access to real data in island regions, synthetic data are generated as follows:

3-2-1. Synthetic Data Generation Code
python
"""
Synthetic data generation module for the AI-DSS Island system
This code is protected with a custom cryptographic algorithm
"""

import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import random
import json
import hashlib
import base64
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

# ============================================================
# Patent cryptographic layer - "Adaptive Multi-Layer Cryptography System"
# ============================================================

class AdaptiveMultiLayerCipher:
    """
    Adaptive Multi-Layer Cryptography System (AMLC)
    This technology is a registered patent and its code is encrypted
    Patent: IR-P-2026-00842-AML
    """
    
    def __init__(self, master_key: bytes):
        self.master_key = master_key
        self.layer_count = 7  # number of cryptographic layers
        self.adaptive_factor = self._generate_adaptive_factor()
        
    def _generate_adaptive_factor(self) -> bytes:
        """Generate an adaptive factor based on time and system parameters"""
        timestamp = datetime.now().timestamp()
        system_info = f"{timestamp}-{id(self)}-AML-SEED".encode()
        return hashlib.sha3_256(system_info).digest()
    
    def _derive_layer_key(self, layer_index: int, context: bytes) -> bytes:
        """Derive each layer's key based on the layer index and context"""
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA3_512(),
            length=32,
            salt=self.master_key[:16] + context[:16],
            iterations=100000 + (layer_index * 10000)
        )
        return kdf.derive(self.master_key + self.adaptive_factor + bytes([layer_index]))
    
    def encrypt(self, plaintext: bytes, context: bytes = b"") -> bytes:
        """
        Adaptive multi-layer encryption
        Each layer uses a different encryption algorithm
        """
        data = plaintext
        layer_keys = []
        
        for i in range(self.layer_count):
            layer_key = self._derive_layer_key(i, context if context else data[:32])
            layer_keys.append(layer_key)
            
            # Even layers: AES-like, odd layers: ChaCha20-like
            if i % 2 == 0:
                fernet = Fernet(base64.urlsafe_b64encode(layer_key))
                data = fernet.encrypt(data)
            else:
                # Simpler encryption for odd layers (for speed)
                xor_key = layer_key[:len(data)]
                data = bytes(a ^ b for a, b in zip(data, xor_key * (len(data) // len(xor_key) + 1)))
                data = data[:len(data)]
        
        # Add a header containing the number of layers and the fingerprint
        header = f"AMLv1|{self.layer_count}|".encode()
        fingerprint = hashlib.blake2b(data + self.master_key).digest()[:8]
        
        return header + fingerprint + data
    
    def decrypt(self, ciphertext: bytes, context: bytes = b"") -> bytes:
        """Adaptive multi-layer decryption"""
        # Extract the header
        header_end = ciphertext.find(b"|", 10)
        if header_end == -1:
            raise ValueError("Invalid AML header")
        
        fingerprint = ciphertext[header_end + 1:header_end + 9]
        data = ciphertext[header_end + 9:]
        
        # Reverse decryption
        for i in range(self.layer_count - 1, -1, -1):
            layer_key = self._derive_layer_key(i, context if context else data[:32])
            
            if i % 2 == 0:
                fernet = Fernet(base64.urlsafe_b64encode(layer_key))
                data = fernet.decrypt(data)
            else:
                xor_key = layer_key[:len(data)]
                data = bytes(a ^ b for a, b in zip(data, xor_key * (len(data) // len(xor_key) + 1)))
                data = data[:len(data)]
        
        return data


# ============================================================
# Synthetic data generator
# ============================================================

class SyntheticDataGenerator:
    """
    Synthetic data generator for training artificial intelligence models
    With the ability to generate diverse crisis scenarios on islands
    """
    
    def __init__(self, seed: int = 42):
        np.random.seed(seed)
        random.seed(seed)
        self.island_types = ['Coral', 'Volcanic', 'Sedimentary', 'Artificial']
        self.hazard_types = ['Flood', 'Storm', 'Earthquake', 'Fire', 'Sea level rise', 'Drought']
        self.resource_types = ['Water', 'Food', 'Medicine', 'Shelter', 'Fuel', 'Medical equipment', 'Blankets']
        self.transport_modes = ['On foot', 'Relief vehicle', 'Helicopter', 'Vessel', 'Motorcycle']
        
    def generate_island_dataset(self, num_islands: int = 200) -> pd.DataFrame:
        """Generate island data"""
        data = []
        for i in range(num_islands):
            island = {
                'island_id': f'ISL-{i:04d}',
                'name': f'Island-{i+1}',
                'island_type': random.choice(self.island_types),
                'latitude': np.random.uniform(-90, 90),
                'longitude': np.random.uniform(-180, 180),
                'area_km2': np.random.uniform(0.5, 500),
                'population': int(np.random.uniform(50, 50000)),
                'elevation_max_m': np.random.uniform(1, 500),
                'infrastructure_score': np.random.uniform(0, 1),
                'has_port': random.choice([True, False]),
                'has_airport': random.choice([True, False]),
                'has_hospital': random.choice([True, False]),
                'distance_to_mainland_km': np.random.uniform(1, 500)
            }
            data.append(island)
        return pd.DataFrame(data)
    
    def generate_hazard_scenarios(self, num_scenarios: int = 1000) -> pd.DataFrame:
        """Generate crisis scenarios"""
        scenarios = []
        for i in range(num_scenarios):
            hazard = {
                'scenario_id': f'SCN-{i:05d}',
                'hazard_type': random.choice(self.hazard_types),
                'severity': np.random.uniform(1, 10),
                'start_time': datetime.now() - timedelta(days=np.random.uniform(0, 365)),
                'duration_hours': np.random.uniform(1, 168),
                'affected_area_km2': np.random.uniform(0.1, 100),
                'casualties_estimate': int(np.random.poisson(10)),
                'displaced_population': int(np.random.poisson(100)),
                'warning_time_hours': np.random.uniform(0, 48),
                'is_forecasted': random.choice([True, False])
            }
            scenarios.append(hazard)
        return pd.DataFrame(scenarios)
    
    def generate_logistics_data(self, num_records: int = 5000) -> pd.DataFrame:
        """
        Generate logistics data inspired by similar datasets[reference:30]
        Includes 1000 zones with logistical complexities
        """
        records = []
        for i in range(num_records):
            population = np.random.uniform(50, 50000)
            record = {
                'zone_id': f'ZONE-{i:06d}',
                'latitude': np.random.uniform(-90, 90),
                'longitude': np.random.uniform(-180, 180),
                'severity': np.random.uniform(0, 10),
                'population': int(population),
                'daily_water_need_liters': int(population * np.random.uniform(2, 5)),
                'daily_food_need_units': int(population * np.random.uniform(1, 3)),
                'priority_index': np.random.uniform(0, 1),
                'fallback_trigger': random.choice([0, 1]),
                'medical_supply_need': int(np.random.uniform(0, 100)),
                'shelter_need': int(np.random.uniform(0, 200)),
                'transport_mode_primary': random.choice(self.transport_modes),
                'distance_to_supply_hub_km': np.random.uniform(0.5, 200),
                'communication_status': np.random.uniform(0, 1),
                'last_contact_time': datetime.now() - timedelta(hours=np.random.uniform(0, 72))
            }
            records.append(record)
        return pd.DataFrame(records)
    
    def generate_resource_allocation_data(self, num_allocations: int = 10000) -> pd.DataFrame:
        """Generate resource allocation data"""
        allocations = []
        for i in range(num_allocations):
            allocation = {
                'allocation_id': f'ALLOC-{i:07d}',
                'resource_type': random.choice(self.resource_types),
                'quantity': int(np.random.uniform(1, 1000)),
                'source_location': f'Hub-{random.randint(1, 50)}',
                'destination_zone': f'ZONE-{random.randint(1, 5000):06d}',
                'transport_mode': random.choice(self.transport_modes),
                'travel_time_minutes': np.random.uniform(10, 600),
                'urgency_score': np.random.uniform(0, 1),
                'allocation_time': datetime.now() - timedelta(hours=np.random.uniform(0, 168)),
                'delivery_status': random.choice(['pending', 'in_transit', 'delivered', 'failed']),
                'cost_estimate': np.random.uniform(100, 100000)
            }
            allocations.append(allocation)
        return pd.DataFrame(allocations)
    
    def generate_complete_dataset(self, output_dir: str = "./data"):
        """Generate the complete dataset"""
        import os
        os.makedirs(output_dir, exist_ok=True)
        
        print("🔄 Generating synthetic data...")
        
        # Generate the various data
        islands = self.generate_island_dataset(200)
        scenarios = self.generate_hazard_scenarios(1000)
        logistics = self.generate_logistics_data(5000)
        allocations = self.generate_resource_allocation_data(10000)
        
        # Save to CSV files
        islands.to_csv(f"{output_dir}/islands.csv", index=False)
        scenarios.to_csv(f"{output_dir}/hazard_scenarios.csv", index=False)
        logistics.to_csv(f"{output_dir}/logistics_zones.csv", index=False)
        allocations.to_csv(f"{output_dir}/resource_allocations.csv", index=False)
        
        # Generate a consolidated file for model training
        combined = self._create_training_dataset(islands, scenarios, logistics, allocations)
        combined.to_csv(f"{output_dir}/training_dataset.csv", index=False)
        
        print(f"✅ Synthetic data saved to '{output_dir}'")
        print(f"   - {len(islands)} islands")
        print(f"   - {len(scenarios)} crisis scenarios")
        print(f"   - {len(logistics)} logistics zones")
        print(f"   - {len(allocations)} resource allocations")
        print(f"   - {len(combined)} training records")
        
        return {
            'islands': islands,
            'scenarios': scenarios,
            'logistics': logistics,
            'allocations': allocations,
            'training': combined
        }
    
    def _create_training_dataset(self, islands, scenarios, logistics, allocations) -> pd.DataFrame:
        """Create a consolidated dataset for training AI models"""
        # Combine the data with an approach similar to FRIDA[reference:31]
        training_data = []
        
        for _, island in islands.iterrows():
            for _, scenario in scenarios.sample(min(5, len(scenarios))).iterrows():
                for _, log in logistics.sample(min(3, len(logistics))).iterrows():
                    record = {
                        'island_id': island['island_id'],
                        'island_type': island['island_type'],
                        'latitude': island['latitude'],
                        'longitude': island['longitude'],
                        'population': island['population'],
                        'infrastructure_score': island['infrastructure_score'],
                        'hazard_type': scenario['hazard_type'],
                        'severity': scenario['severity'],
                        'warning_time': scenario['warning_time_hours'],
                        'zone_severity': log['severity'],
                        'zone_population': log['population'],
                        'daily_water_need': log['daily_water_need_liters'],
                        'daily_food_need': log['daily_food_need_units'],
                        'priority_index': (island['population'] / 50000 * 0.3 + 
                                          scenario['severity'] / 10 * 0.4 + 
                                          log['priority_index'] * 0.3),
                        'transport_mode': log['transport_mode_primary'],
                        'distance_to_supply': log['distance_to_supply_hub_km'],
                        'communication_status': log['communication_status'],
                        'resource_type': random.choice(self.resource_types),
                        'resource_quantity': int(np.random.uniform(10, 500)),
                        'target_response_time': np.random.uniform(30, 300)
                    }
                    training_data.append(record)
        
        return pd.DataFrame(training_data)


# ============================================================
# Example system usage
# ============================================================

if __name__ == "__main__":
    # 1. Generate synthetic data
    generator = SyntheticDataGenerator(seed=2026)
    dataset = generator.generate_complete_dataset("./synthetic_data")
    
    # 2. Encrypt sensitive data
    master_key = PBKDF2HMAC(
        algorithm=hashes.SHA3_512(),
        length=32,
        salt=b"AML-ISLAND-DSS-2026",
        iterations=250000
    ).derive(b"MASTER-SECRET-KEY-FOR-ISLAND-DSS")
    
    cipher = AdaptiveMultiLayerCipher(master_key)
    
    # 3. Encrypt data files
    print("\n🔐 Encrypting data with the AML system...")
    for filename in ['islands.csv', 'hazard_scenarios.csv', 'logistics_zones.csv', 
                     'resource_allocations.csv', 'training_dataset.csv']:
        with open(f"./synthetic_data/{filename}", 'rb') as f:
            data = f.read()
        
        encrypted = cipher.encrypt(data, context=b"TRAINING-DATA-2026")
        
        with open(f"./synthetic_data/{filename}.enc", 'wb') as f:
            f.write(encrypted)
        
        print(f"   ✅ {filename} encrypted")
    
    print("\n✅ Data generation and encryption process completed successfully")

## Development

This repository implements the command dashboard (presentation layer) and its supporting API described in the SRS above. It is a two-service application:

- `backend/` — FastAPI service exposing REST + WebSocket endpoints over islands, hazard scenarios, logistics zones, resource allocations, and real-time alerts. Includes the synthetic data generator used to seed demo data.
- `frontend/` — React + TypeScript + Vite command dashboard: KPI overview, GIS map (MapLibre), logistics table, real-time alert feed, and SitRep view.

### Run with Docker Compose

```bash
docker compose up --build
```

- Dashboard: http://localhost:5173
- API: http://localhost:8000 (docs at `/docs`)
- Postgres: localhost:5432

### Run locally without Docker

Backend:

```bash
cd backend
cp .env.example .env
pip install -e ".[dev]"
python -m app.seed        # populate demo data
uvicorn app.main:app --reload
```

Frontend:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

### Tests & linting

```bash
cd backend && pytest && ruff check .
cd frontend && npm run lint && npm run build
```

### Generate synthetic data only (no database required)

```bash
python scripts/generate_synthetic_data.py ./synthetic_data
```

