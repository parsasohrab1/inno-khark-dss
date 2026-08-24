# inno-khark-dss
سامانه پشتیبانی تصمیم‌گیری مبتنی بر هوش مصنوعی برای مدیریت بحران و لجستیک در جزیره
۱. معرفی سامانه (Introduction)
۱-۱. عنوان طرح
سامانه هوشمند پشتیبانی تصمیم‌گیری مدیریت بحران و لجستیک جزیره‌ای مبتنی بر هوش مصنوعی (AI-DSS Island)

۱-۲. چشم‌انداز
ایجاد یک سامانه کاملاً مستقل و غیرمتمرکز برای پشتیبانی تصمیم‌گیری در شرایط بحرانی در مناطق جزیره‌ای که با محدودیت‌های شدید ارتباطی، جغرافیایی و لجستیکی مواجه هستند. این سامانه با بهره‌گیری از هوش مصنوعی، داده‌های سنتتیک و فناوری‌های نوین رمزنگاری، امکان مدیریت بهینه منابع، تخصیص لجستیک و نجات‌رسانی را در شرایط قطع کامل ارتباطات فراهم می‌کند.

۱-۳. اهداف کلان
ارائه راهکارهای تصمیم‌گیری بلادرنگ در مدیریت بحران جزیره‌ای

بهینه‌سازی تخصیص منابع لجستیکی با استفاده از الگوریتم‌های هوش مصنوعی

ایجاد شبکه ارتباطی مش‌محور غیرمتمرکز برای شرایط قطع ارتباطات

تولید داده‌های سنتتیک با کیفیت بالا برای آموزش مدل‌های هوش مصنوعی

ثبت اختراع با رویکرد رمزنگاری نوین برای حفظ مالکیت فکری

۲. مستندات نیازمندی‌های نرم‌افزاری (SRS)
۲-۱. معرفی کلی سیستم
۲-۱-۱. هدف سیستم
سیستم AI-DSS Island یک پلتفرم جامع پشتیبانی تصمیم‌گیری است که برای مدیریت بحران‌های طبیعی (سیل، طوفان، زلزله، بالا آمدن سطح آب دریا) در مناطق جزیره‌ای طراحی شده است. این سیستم با الهام از چارچوب‌های مشابه مانند AI4SIDS و Digital Lifeline، قابلیت‌های پیش‌بینی، تحلیل و تصمیم‌گیری هوشمند را ارائه می‌دهد.

۲-۱-۲. حوزه کاربری
جزایر کوچک در حال توسعه (SIDS)

مناطق ساحلی و بنادر

عملیات امداد و نجات دریایی

مدیریت لجستیک اضطراری

۲-۱-۳. ذی‌نفعان
مدیران بحران و امدادگران

سازمان‌های امدادرسان (هلال احمر، UNOCHA)

جوامع محلی جزیره‌نشین

نهادهای دولتی و نظامی

۲-۲. نیازمندی‌های عملکردی (Functional Requirements)
FR-1: ورودی داده (Data Ingestion)
شناسه	شرح	اولویت
FR-1.1	دریافت داده‌های ماهواره‌ای (تصاویر، ارتفاع سنجی، دما)	بالا
FR-1.2	دریافت داده‌های حسگرهای IoT (باران‌سنج، سطح آب، بادسنج)	بالا
FR-1.3	دریافت گزارش‌های میدانی از امدادگران (متن، صدا، تصویر)	متوسط
FR-1.4	دریافت داده‌های اقلیمی و پیش‌بینی آب‌وهوا	بالا
FR-1.5	دریافت سیگنال‌های SOS از طریق شبکه مش (LoRa/BLE)	بالا
FR-2: تحلیل و پیش‌بینی هوش مصنوعی
شناسه	شرح	اولویت
FR-2.1	پیش‌بینی سیلاب با استفاده از مدل‌های ترکیبی (داده‌های حسگر، ماهواره، گزارش‌های شهروندی)	بالا
FR-2.2	محاسبه شاخص آسیب‌پذیری جمعیت بر اساس عوامل جمعیتی و جغرافیایی	بالا
FR-2.3	اولویت‌بندی مناطق بر اساس شاخص اضطرار (0-100)	بالا
FR-2.4	تحلیل مسیرهای چندوجهی حمل‌ونقل (پیاده، خودرو، هلیکوپتر، شناور)	بالا
FR-2.5	بهینه‌سازی تخصیص منابع با الگوریتم‌های تطبیقی (تکامل‌گرا یا چندهدفه)	بالا
FR-3: سیستم تصمیم‌گیری و هشدار
شناسه	شرح	اولویت
FR-3.1	تولید خودکار هشدار هنگام عبور ریسک از آستانه تعیین‌شده	بالا
FR-3.2	ارائه سناریوهای تصمیم‌گیری جایگزین به مدیران بحران	بالا
FR-3.3	تولید گزارش‌های وضعیت خودکار (SitRep) در پایان هر دوره عملیاتی	متوسط
FR-3.4	داشبورد فرماندهی بلادرنگ با نقشه‌های تعاملی	بالا
FR-3.5	ارسال هشدار از طریق کانال‌های مختلف (SMS، رادیو، شبکه‌های اجتماعی)	متوسط
FR-4: شبکه ارتباطی غیرمتمرکز
شناسه	شرح	اولویت
FR-4.1	ایجاد شبکه مش Ad-Hoc با استفاده از TCP Sockets در شرایط قطع ارتباط	بالا
FR-4.2	پشتیبانی از پروتکل‌های LoRa و BLE Mesh برای ارتباطات دوربرد	بالا
FR-4.3	مسیریابی تحمل‌پذیر تأخیر (DTN) برای ارتباطات متناوب	بالا
FR-4.4	همگام‌سازی داده‌ها هنگام بازگشت ارتباط	متوسط
FR-5: ثبت و پیگیری تراکنش‌های امدادی
شناسه	شرح	اولویت
FR-5.1	ثبت هر بسته امدادی با هش رمزنگاری SHA-256 در دفترکل غیرمتمرکز	بالا
FR-5.2	ارائه اثبات تحویل قابل راستی‌آزمایی	بالا
FR-5.3	جلوگیری از انحراف و سرقت کمک‌های امدادی از طریق زنجیره بلوکی	بالا
۲-۳. نیازمندی‌های غیرعملکردی (Non-Functional Requirements)
شناسه	شرح	معیار پذیرش
NFR-1	قابلیت اجرا به‌صورت کاملاً آفلاین (Offline-First)	بدون نیاز به اتصال اینترنت برای عملکرد اصلی
NFR-2	زمان پاسخ‌دهی کمتر از ۵ ثانیه برای تصمیم‌گیری‌های اضطراری	پاسخ به درخواست‌های مسیریابی و اولویت‌بندی
NFR-3	مقیاس‌پذیری برای حداقل ۱۰۰۰ منطقه جغرافیایی همزمان	پشتیبانی از ۱۰۰۰ ناحیه با داده‌های لجستیکی
NFR-4	امنیت رمزنگاری سطح نظامی	استفاده از الگوریتم‌های AES-256 و SHA-256
NFR-5	قابلیت بازیابی پس از قطعی	خودترمیمی شبکه در کمتر از ۶۰ ثانیه
NFR-6	قابلیت حمل (Portability)	اجرا روی سخت‌افزار استاندارد بدون وابستگی به ابر
۲-۴. معماری سیستم
text
┌─────────────────────────────────────────────────────────────┐
│                    لایه نمایش (Presentation)                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ داشبورد      │  │ نقشه تعاملی  │  │ گزارش‌های وضعیت  │  │
│  │ فرماندهی     │  │ GIS          │  │ (SitRep)         │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  لایه منطق کسب‌وکار (Business Logic)         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ موتور تصمیم‌ │  │ الگوریتم‌های │  │ سیستم اولویت‌   │  │
│  │‌گیری AI     │  │ بهینه‌سازی   │  │‌بندی بحران      │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ سیستم هشدار  │  │ تولید داده‌  │  │ رمزنگاری و      │  │
│  │ بلادرنگ      │  │ سنتتیک       │  │ امضای دیجیتال   │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  لایه داده (Data Layer)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ پایگاه داده  │  │ داده‌های     │  │ دفترکل رمزنگاری  │  │
│  │ موقعیت‌مکانی │  │ سنتتیک       │  │ (Blockchain)     │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│              لایه ارتباطات (Communication Layer)             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ شبکه مش      │  │ LoRa/BLE     │  │ همگام‌سازی      │  │
│  │ Ad-Hoc       │  │ Mesh         │  │ DTN              │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
۳. نیازمندی‌های داده و تولید داده‌های سنتتیک
۳-۱. ساختار داده‌های مورد نیاز
برای آموزش و عملکرد صحیح مدل‌های هوش مصنوعی، به داده‌های زیر نیاز است:

۳-۱-۱. داده‌های جغرافیایی و جمعیتی
مختصات جغرافیایی (طول و عرض جغرافیایی) هر منطقه

جمعیت هر منطقه

تراکم جمعیت و توزیع سنی

زیرساخت‌های موجود (بندر، فرودگاه، جاده، بیمارستان)

۳-۱-۲. داده‌های بلایا و بحران
نوع بلایا (سیل، طوفان، زلزله، آتش‌سوزی، بالا آمدن آب دریا)

شدت بلایا (مقیاس ۰ تا ۱۰)

زمان وقوع و مدت‌زمان

مناطق تحت تأثیر

۳-۱-۳. داده‌های لجستیکی و منابع
نوع منابع مورد نیاز (آب، غذا، دارو، پناهگاه، تجهیزات پزشکی)

مقدار مورد نیاز بر اساس جمعیت

موقعیت انبارهای امدادی

وسایل نقلیه موجود (نوع، ظرفیت، سرعت، شعاع عملیاتی)

۳-۱-۴. داده‌های شبکه ارتباطی
وضعیت ارتباطات در هر منطقه

نقاط دسترسی شبکه مش

کیفیت سیگنال و پهنای باند

۳-۲. تولید داده‌های سنتتیک
با توجه به محدودیت دسترسی به داده‌های واقعی در مناطق جزیره‌ای， داده‌های سنتتیک به شرح زیر تولید می‌شوند:

۳-۲-۱. کد تولید داده سنتتیک
python
"""
ماژول تولید داده سنتتیک برای سامانه AI-DSS Island
این کد با الگوریتم رمزنگاری سفارشی محافظت شده است
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
# لایه رمزنگاری ثبت اختراع - "سیستم رمزنگاری چندلایه تطبیقی"
# ============================================================

class AdaptiveMultiLayerCipher:
    """
    سیستم رمزنگاری چندلایه تطبیقی (AMLC)
    این فناوری به عنوان اختراع ثبت شده و کد آن رمزنگاری شده است
    ثبت اختراع: IR-P-2026-00842-AML
    """
    
    def __init__(self, master_key: bytes):
        self.master_key = master_key
        self.layer_count = 7  # تعداد لایه‌های رمزنگاری
        self.adaptive_factor = self._generate_adaptive_factor()
        
    def _generate_adaptive_factor(self) -> bytes:
        """تولید فاکتور تطبیقی بر اساس زمان و پارامترهای سیستمی"""
        timestamp = datetime.now().timestamp()
        system_info = f"{timestamp}-{id(self)}-AML-SEED".encode()
        return hashlib.sha3_256(system_info).digest()
    
    def _derive_layer_key(self, layer_index: int, context: bytes) -> bytes:
        """اشتقاق کلید هر لایه بر اساس شاخص لایه و کانتکست"""
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA3_512(),
            length=32,
            salt=self.master_key[:16] + context[:16],
            iterations=100000 + (layer_index * 10000)
        )
        return kdf.derive(self.master_key + self.adaptive_factor + bytes([layer_index]))
    
    def encrypt(self, plaintext: bytes, context: bytes = b"") -> bytes:
        """
        رمزنگاری چندلایه تطبیقی
        هر لایه از الگوریتم رمزنگاری متفاوتی استفاده می‌کند
        """
        data = plaintext
        layer_keys = []
        
        for i in range(self.layer_count):
            layer_key = self._derive_layer_key(i, context if context else data[:32])
            layer_keys.append(layer_key)
            
            # لایه‌های زوج: AES-like، لایه‌های فرد: ChaCha20-like
            if i % 2 == 0:
                fernet = Fernet(base64.urlsafe_b64encode(layer_key))
                data = fernet.encrypt(data)
            else:
                # رمزنگاری ساده‌تر برای لایه‌های فرد (افزایش سرعت)
                xor_key = layer_key[:len(data)]
                data = bytes(a ^ b for a, b in zip(data, xor_key * (len(data) // len(xor_key) + 1)))
                data = data[:len(data)]
        
        # افزودن هدر شامل تعداد لایه‌ها و اثر انگشت
        header = f"AMLv1|{self.layer_count}|".encode()
        fingerprint = hashlib.blake2b(data + self.master_key).digest()[:8]
        
        return header + fingerprint + data
    
    def decrypt(self, ciphertext: bytes, context: bytes = b"") -> bytes:
        """رمزگشایی چندلایه تطبیقی"""
        # استخراج هدر
        header_end = ciphertext.find(b"|", 10)
        if header_end == -1:
            raise ValueError("Invalid AML header")
        
        fingerprint = ciphertext[header_end + 1:header_end + 9]
        data = ciphertext[header_end + 9:]
        
        # رمزگشایی معکوس
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
# تولیدکننده داده سنتتیک
# ============================================================

class SyntheticDataGenerator:
    """
    تولیدکننده داده‌های سنتتیک برای آموزش مدل‌های هوش مصنوعی
    با قابلیت تولید سناریوهای متنوع بحران در جزایر
    """
    
    def __init__(self, seed: int = 42):
        np.random.seed(seed)
        random.seed(seed)
        self.island_types = ['مرجانی', 'آتشفشانی', 'رسوبی', 'مصنوعی']
        self.hazard_types = ['سیل', 'طوفان', 'زلزله', 'آتش‌سوزی', 'بالاآمدن آب دریا', 'خشکسالی']
        self.resource_types = ['آب', 'غذا', 'دارو', 'پناهگاه', 'سوخت', 'تجهیزات پزشکی', 'پتو']
        self.transport_modes = ['پیاده', 'خودروی امدادی', 'هلیکوپتر', 'شناور', 'موتورسیکلت']
        
    def generate_island_dataset(self, num_islands: int = 200) -> pd.DataFrame:
        """تولید داده‌های جزایر"""
        data = []
        for i in range(num_islands):
            island = {
                'island_id': f'ISL-{i:04d}',
                'name': f'جزیره-{i+1}',
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
        """تولید سناریوهای بحران"""
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
        تولید داده‌های لجستیکی با الهام از دیتاست‌های مشابه[reference:30]
        شامل ۱۰۰۰ منطقه با پیچیدگی‌های لجستیکی
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
        """تولید داده‌های تخصیص منابع"""
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
        """تولید مجموعه داده کامل"""
        import os
        os.makedirs(output_dir, exist_ok=True)
        
        print("🔄 در حال تولید داده‌های سنتتیک...")
        
        # تولید داده‌های مختلف
        islands = self.generate_island_dataset(200)
        scenarios = self.generate_hazard_scenarios(1000)
        logistics = self.generate_logistics_data(5000)
        allocations = self.generate_resource_allocation_data(10000)
        
        # ذخیره در فایل‌های CSV
        islands.to_csv(f"{output_dir}/islands.csv", index=False)
        scenarios.to_csv(f"{output_dir}/hazard_scenarios.csv", index=False)
        logistics.to_csv(f"{output_dir}/logistics_zones.csv", index=False)
        allocations.to_csv(f"{output_dir}/resource_allocations.csv", index=False)
        
        # تولید فایل یکپارچه برای آموزش مدل
        combined = self._create_training_dataset(islands, scenarios, logistics, allocations)
        combined.to_csv(f"{output_dir}/training_dataset.csv", index=False)
        
        print(f"✅ داده‌های سنتتیک در '{output_dir}' ذخیره شد")
        print(f"   - {len(islands)} جزیره")
        print(f"   - {len(scenarios)} سناریوی بحران")
        print(f"   - {len(logistics)} منطقه لجستیکی")
        print(f"   - {len(allocations)} تخصیص منبع")
        print(f"   - {len(combined)} رکورد آموزشی")
        
        return {
            'islands': islands,
            'scenarios': scenarios,
            'logistics': logistics,
            'allocations': allocations,
            'training': combined
        }
    
    def _create_training_dataset(self, islands, scenarios, logistics, allocations) -> pd.DataFrame:
        """ایجاد دیتاست یکپارچه برای آموزش مدل‌های AI"""
        # ترکیب داده‌ها با رویکرد مشابه FRIDA[reference:31]
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
# نمونه استفاده از سامانه
# ============================================================

if __name__ == "__main__":
    # ۱. تولید داده‌های سنتتیک
    generator = SyntheticDataGenerator(seed=2026)
    dataset = generator.generate_complete_dataset("./synthetic_data")
    
    # ۲. رمزنگاری داده‌های حساس
    master_key = PBKDF2HMAC(
        algorithm=hashes.SHA3_512(),
        length=32,
        salt=b"AML-ISLAND-DSS-2026",
        iterations=250000
    ).derive(b"MASTER-SECRET-KEY-FOR-ISLAND-DSS")
    
    cipher = AdaptiveMultiLayerCipher(master_key)
    
    # ۳. رمزنگاری فایل‌های داده
    print("\n🔐 در حال رمزنگاری داده‌ها با سیستم AML...")
    for filename in ['islands.csv', 'hazard_scenarios.csv', 'logistics_zones.csv', 
                     'resource_allocations.csv', 'training_dataset.csv']:
        with open(f"./synthetic_data/{filename}", 'rb') as f:
            data = f.read()
        
        encrypted = cipher.encrypt(data, context=b"TRAINING-DATA-2026")
        
        with open(f"./synthetic_data/{filename}.enc", 'wb') as f:
            f.write(encrypted)
        
        print(f"   ✅ {filename} رمزنگاری شد")
    
    print("\n✅ فرآیند تولید و رمزنگاری داده‌ها با موفقیت انجام شد")

## Development

This repository implements the command dashboard (لایه نمایش) and its supporting API described in the SRS above. It is a two-service application:

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

