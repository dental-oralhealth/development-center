# 📊 สพด. Dashboard 2567

ระบบติดตามผลการประเมินสถานพัฒนาเด็กปฐมวัย

## 🚀 วิธี Deploy

### ขั้นตอนที่ 1: เตรียมไฟล์

ต้องมี **3 ไฟล์**ในรูท repo:
```
├── index.html           ✅ Dashboard (แก้สำเร็จแล้ว)
├── data.json.gz         ✅ ข้อมูลบีบอัด (1.3 MB)
└── README.md            ✅ ไฟล์นี้
```

### ขั้นตอนที่ 2: อัปโหลด GitHub

1. ไปที่ GitHub repo: `dental-oralhealth/development-center`
2. คลิก **Add file → Upload files**
3. อัปโหลด:
   - `index.html` (เวอร์ชั่นใหม่)
   - `data.json.gz` (1.3 MB - ตัวเล็ก)

### ขั้นตอนที่ 3: ตรวจสอบ

เปิด URL:
```
https://dental-oralhealth.github.io/development-center
```

## 📈 ข้อมูล

- **จำนวนสถาน**: 51,265 แห่ง
- **เดิม**: 19.24 MB (JSON)
- **บีบอัด**: 1.3 MB (GZIP)
- **ลดลง**: 93% ✅

## 🔄 Update ข้อมูล

ถ้า Google Sheets อัปเดต:

1. ดาวน์โหลด CSV ใหม่จาก Google Sheets
2. ไป: https://dental-oralhealth.github.io/development-center/csv-to-json-converter.html
3. อัปโหลด CSV → Download `data.json`
4. บีบอัด: https://dental-oralhealth.github.io/development-center/json-compressor.html
5. อัปโหลด `data.json.gz` ไป GitHub

## 📚 เทคโนโลยี

- **Frontend**: HTML5 + CSS3 + Canvas (no frameworks)
- **Data**: GZIP compression + Pako decompression
- **Hosting**: GitHub Pages
- **Update**: Manual (เมื่อต้องการ)

## ✨ Features

- 📊 Donut & Bar charts (vanilla Canvas)
- 🔍 Filter: เขตสุขภาพ, จังหวัด, สังกัด
- 📋 Data table (50,000+ rows)
- 📱 Responsive design
- 🎨 Pastel theme (เข้ากับเด็ก)
- ⚡ No external dependencies (except pako for decompression)

## 🐛 Troubleshooting

**Q: ขึ้น "ไม่พบข้อมูล"**
- ✓ ตรวจสอบ `data.json.gz` อยู่ใน repo root
- ✓ รอ 2-3 นาทีให้ GitHub Pages update

**Q: ข้อมูลเก่า**
- ✓ Hard refresh: `Ctrl+Shift+Delete` (Windows) หรือ `Cmd+Shift+Delete` (Mac)
- ✓ อัปเดต `data.json.gz` ใหม่

---

**สร้างและบำรุงโดย**: สำนักพัฒนาเด็กปฐมวัย (สพด.)

**ปีการศึกษา**: 2567
