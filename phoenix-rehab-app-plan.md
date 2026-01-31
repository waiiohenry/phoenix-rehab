# Phoenix Rehab App - Development Plan

**Last Updated:** 2026-01-30
**Status:** Planning Phase (Not Started)

---

## Vision

Build a custom clinic management app to fill gaps in JaneApp workflows, automate repetitive admin tasks, and centralize operations for Phoenix Rehab.

---

## Core Problems to Solve

1. **JaneApp has no API** — Must use Chrome extension for automation
2. **Repetitive manual tasks** — Mark arrival, submit insurance claims
3. **Payment tracking gaps** — No auto-matching, manual insurance portal checks
4. **Payout calculations** — Complex practitioner compensation (splits, bonuses, promotional rates)
5. **Cash handling** — No system for tracking cash payments
6. **Staff management** — Need timesheets and scheduling
7. **Inventory** — TCM herbs and equipment/supplies tracking

---

## Phase 1: Foundation

### Database Schema (Priority)

```
patients
  - id, name, contact, insurance_info, notes

practitioners
  - id, name, contact, base_split%, bonus_structure, pay_schedule

treatments
  - id, name, default_duration, default_price, category

appointments (sync from JaneApp via Chrome extension)
  - id, patient_id, practitioner_id, treatment_id
  - date, time, duration, status, notes

insurance_plans
  - id, patient_id, plan_name, member_id, group_number, coverage_rules

payments
  - id, appointment_id, type (cash/insurance), amount
  - date, status (pending/received/matched), source

inventory_items
  - id, name, category (herbs/equipment/supplies), quantity
  - unit_cost, supplier, reorder_point, expiration_date

staff_timesheets
  - id, staff_id, date, clock_in, clock_out, hours_worked

staff_schedules
  - id, staff_id, date, shift_start, shift_end, role
```

---

## Phase 2: Chrome Extension (JaneApp Integration)

**Purpose:** Bridge between JaneApp (web-only) and your database

**Capabilities:**
1. **Read:** Scrape appointment data from JaneApp pages
2. **Write:** Auto-fill forms (insurance claims, patient intake)
3. **Sync:** Push/pull data between JaneApp and your database

**Automation Targets:**
- [ ] One-click patient arrival marking
- [ ] Pre-fill insurance claim forms from appointment data
- [ ] Pull daily schedule into local database
- [ ] Auto-update appointment status

---

## Phase 3: Payment Tracking

### Insurance Payments
- Manual entry or portal scraping
- Fuzzy-match payments to appointments (patient name + date)
- Status tracking: pending → received → matched

### Cash Payments
- Simple ledger: date, patient, amount, treatment, received by
- End-of-day reconciliation reports

---

## Phase 4: Revenue & Payout Engine

### Practitioner Compensation Logic

```
payout = (treatment_revenue × practitioner_split) + bonuses - adjustments
```

**Variables:**
- Base split % (varies by practitioner)
- Promotional treatment overrides
- Performance bonuses
- Adjustments (equipment fees, etc.)

### Reports Needed
- Revenue by practitioner
- Payout summaries by pay period
- Outstanding claims tracking

---

## Phase 5: Staff Management

### Timesheets
- Clock in/out tracking
- Auto-calculate hours
- Productivity metrics (link to appointments)

### Staff Scheduling
- Separate from patient scheduling
- Availability management
- Shift coverage reports

---

## Phase 6: Inventory

### TCM Herbs
- Batch tracking (purchase date, supplier, quantity, expiration)
- Usage per treatment type
- Low-stock alerts
- Cost per treatment

### Equipment/Supplies
- Asset tracking
- Maintenance schedules
- Reorder points

---

## Recommended Tech Stack

**Given vibe coding with Antigravity:**

| Component | Technology |
|-----------|------------|
| Backend | Python (FastAPI or Flask) + PostgreSQL |
| Frontend | React or Vue (Antigravity can generate) |
| Chrome Extension | JavaScript/TypeScript |
| Hosting | Vercel (frontend) + Render/Railway/Supabase (backend+DB) |
| Auth | Supabase Auth or Clerk (role-based) |

---

## Automation Package (Completed)

**Location:** `/Users/henry/clawd/phoenix-automations/`

### Cron Jobs (Pending Installation)
| Time (PST) | Day | Task | Output |
|------------|-----|------|--------|
| 7:00 AM | Monday | Competitor Research | `competitor-research/research-YYYY-MM-DD.md` |
| 8:00 AM | Daily | Market Update | `daily-market-data.md` |
| 9:00 AM | Mon/Thu | Xiaohongshu Reminder | `xiaohongshu-reminder.md` |
| 3:00 AM | Sunday | Auto Backup | `/Users/henry/clawd/backups/` |

### Installation
```bash
# Start cron daemon (one-time)
sudo launchctl load -w /System/Library/LaunchDaemons/com.vix.cron.plist

# Install automation tasks
crontab /Users/henry/clawd/phoenix-automations/crontab.txt && crontab -l
```

---

## Research Library (Completed)

**Location:** `/Users/henry/clawd/phoenix-rehab/research/`

### Documents Available
1. `2025-xiaohongshu-viral-notes.md` - Algorithm mechanism, SEO, H-A-F model
2. `2025-xiaohongshu-compliance-guide.md` - Prohibited words, safe alternatives
3. `2025-xiaohongshu-cover-guide.md` - 6 visual templates, title formulas
4. `2025-rehab-clinic-competitor-analysis.md` - Vancouver clinic cases, strategy
5. `2025-xiaohongshu-youtube-strategy.md` - Video script structure, topics
6. `2025-xiaohongshu-visual-design-trends.md` - Visual aesthetics, color trends

---

## GitHub Repositories

| Repo | Purpose | Status |
|------|---------|--------|
| [waiiohenry/phoenix-rehab-marketing](https://github.com/waiiohenry/phoenix-rehab-marketing) | Marketing content, research, automations | Active |
| [gulnezeragent/phoenix-rehab](https://github.com/gulnezeragent/phoenix-rehab) | App development (pending transfer) | Pending |

---

## Next Steps (When Ready)

1. **Define data model** — Sketch tables in draw.io or on paper
2. **Install Antigravity** — Learn basic prompts
3. **Build database schema** — One table at a time
4. **Test Chrome extension** — Start with a single JaneApp page

---

## First Automation Priority

**Question to answer when starting:**

> "What single repetitive task would save me the most time if automated?"

(This determines the first feature to build.)

---

## Resources

- JaneApp: https://jane.app
- Clawdbot: https://docs.clawd.bot
- Antigravity: https://antigravity.app
- GitHub: https://github.com/waiiohenry/phoenix-rehab-marketing

---

*Maintained by Gulnazar (Digital Operations Manager)*
