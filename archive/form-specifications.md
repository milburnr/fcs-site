# FCS HighLevel Form Specifications

This document specifies the form fields and configuration for HighLevel/LeadConnector forms on the Florida Construction Specialists website.

---

## Form 1: Project Consultation Form (Primary)

**Use On:** All service pages, location pages, contact page
**Purpose:** Qualify leads for $500K+ projects
**CTA Button Text:** "Schedule Project Consultation"

### Form Fields

| Field | Type | Required | Options/Validation |
|-------|------|----------|-------------------|
| **Project Type** | Dropdown | Yes | See options below |
| **Estimated Project Value** | Dropdown | Yes | See options below |
| **Project Location** | Dropdown | Yes | See options below |
| **Project Timeline** | Dropdown | Yes | See options below |
| **Name** | Text | Yes | Min 2 characters |
| **Company** | Text | No | Optional |
| **Email** | Email | Yes | Valid email format |
| **Phone** | Phone | Yes | 10-digit US format |
| **Project Description** | Textarea | No | Max 500 characters |

### Field Options

#### Project Type
```
- Commercial Construction ($500K+)
- Multi-Family/Condo ($500K+)
- Disaster Recovery / Insurance Restoration
- Historic Restoration
- Luxury Custom Home ($1M+)
- Balcony Reconstruction / Waterproofing
- Other
```

#### Estimated Project Value (Anchor Pricing)
```
- $250,000 - $500,000
- $500,000 - $1,000,000
- $1,000,000 - $5,000,000
- $5,000,000 - $10,000,000
- $10,000,000+
```

#### Project Location
```
- Tampa
- St. Petersburg
- Clearwater
- Lakeland
- Sarasota
- Bradenton
- Brandon
- Plant City
- Ruskin
- Other Tampa Bay Area
```

#### Project Timeline
```
- Ready to start immediately
- 1-3 months
- 3-6 months
- 6-12 months
- Planning phase
```

### Form Configuration

```json
{
  "formId": "project-consultation",
  "submitButtonText": "Schedule Project Consultation",
  "successMessage": "Thank you for your inquiry. A project consultant will contact you within 24 hours to discuss your project.",
  "redirectUrl": "/thank-you/",
  "notifications": {
    "email": "info@floridaconstructionspecialists.com",
    "sms": "+18134207561"
  },
  "tags": ["website-lead", "project-consultation"],
  "pipeline": "New Leads",
  "stage": "New Inquiry"
}
```

### Lead Qualification Logic

Based on form responses, assign lead score:

| Criteria | Points |
|----------|--------|
| Project Value $5M+ | +50 |
| Project Value $1M-$5M | +30 |
| Project Value $500K-$1M | +20 |
| Project Value $250K-$500K | +10 |
| Timeline: Immediate | +30 |
| Timeline: 1-3 months | +20 |
| Timeline: 3-6 months | +10 |
| Commercial/Multi-Family | +20 |
| Disaster Recovery | +25 |
| Historic Restoration | +15 |
| Has Company Name | +10 |

**Hot Lead:** 60+ points (immediate follow-up)
**Warm Lead:** 30-59 points (same-day follow-up)
**Nurture:** <30 points (email sequence)

---

## Form 2: Insurance Restoration Form

**Use On:** Disaster recovery pages, insurance restoration pages
**Purpose:** Emergency/priority intake for insurance claims
**CTA Button Text:** "Request Insurance Assessment"

### Additional Fields (Beyond Project Consultation)

| Field | Type | Required | Options |
|-------|------|----------|---------|
| **Type of Loss** | Dropdown | Yes | See below |
| **Insurance Carrier** | Text | No | Free text |
| **Date of Loss** | Date | Yes | Date picker |
| **Claim Number** | Text | No | If already assigned |
| **Property Type** | Dropdown | Yes | See below |
| **Emergency Status** | Checkbox | No | "This is an emergency requiring immediate response" |

### Field Options

#### Type of Loss
```
- Hurricane/Tropical Storm
- Tornado/Wind Damage
- Fire/Smoke Damage
- Water/Flood Damage
- Hail Damage
- Vehicle Impact
- Other Catastrophic Loss
```

#### Property Type
```
- Commercial Building
- Multi-Family/Condo (HOA)
- Single-Family Residence ($1M+)
- Industrial/Warehouse
- Municipal/Institutional
- Other
```

### Form Configuration

```json
{
  "formId": "insurance-restoration",
  "submitButtonText": "Request Insurance Assessment",
  "successMessage": "Your insurance restoration request has been received. For immediate assistance, call (813) 420-7561.",
  "urgencyIndicator": true,
  "notifications": {
    "email": "info@floridaconstructionspecialists.com",
    "sms": "+18134207561",
    "urgentAlert": true
  },
  "tags": ["website-lead", "insurance-restoration", "priority"],
  "pipeline": "Insurance Restoration",
  "stage": "New Claim"
}
```

---

## Form 3: Quick Contact Form (Compact)

**Use On:** Footer, sidebar widgets, mobile sticky CTA
**Purpose:** Low-friction contact capture
**CTA Button Text:** "Get Started"

### Form Fields

| Field | Type | Required |
|-------|------|----------|
| **Name** | Text | Yes |
| **Phone** | Phone | Yes |
| **Email** | Email | Yes |
| **Project Type** | Dropdown | Yes |

### Form Configuration

```json
{
  "formId": "quick-contact",
  "submitButtonText": "Get Started",
  "successMessage": "Thank you! We'll call you shortly.",
  "compact": true,
  "notifications": {
    "email": "info@floridaconstructionspecialists.com"
  },
  "tags": ["website-lead", "quick-contact"],
  "pipeline": "New Leads",
  "stage": "Quick Contact"
}
```

---

## Form 4: Commercial Consultation Form

**Use On:** Commercial pillar page, commercial service pages
**Purpose:** B2B-focused commercial project intake
**CTA Button Text:** "Schedule Commercial Consultation"

### Form Fields

| Field | Type | Required |
|-------|------|----------|
| **Company Name** | Text | Yes |
| **Contact Name** | Text | Yes |
| **Title/Role** | Text | Yes |
| **Email** | Email | Yes |
| **Phone** | Phone | Yes |
| **Project Type** | Dropdown | Yes |
| **Estimated Project Value** | Dropdown | Yes |
| **Project Location** | Dropdown | Yes |
| **Timeline** | Dropdown | Yes |
| **Do you have architectural plans?** | Radio | Yes |
| **Project Description** | Textarea | No |

### Field Options

#### Project Type (Commercial-Specific)
```
- Office Building
- Medical/Healthcare Facility
- Multi-Family/Condo Development
- Industrial/Warehouse
- Retail/Restaurant
- Educational Institution
- Municipal/Government
- Hospitality/Hotel
- Mixed-Use Development
- Historic Building Restoration
- Tenant Improvement
- Other Commercial
```

#### Do you have architectural plans?
```
- Yes, complete plans
- Yes, preliminary plans
- No, need design-build services
- Unsure
```

### Form Configuration

```json
{
  "formId": "commercial-consultation",
  "submitButtonText": "Schedule Commercial Consultation",
  "successMessage": "Thank you for your commercial project inquiry. A senior project manager will contact you within 24 hours.",
  "notifications": {
    "email": "info@floridaconstructionspecialists.com"
  },
  "tags": ["website-lead", "commercial", "b2b"],
  "pipeline": "Commercial Projects",
  "stage": "New Inquiry"
}
```

---

## HighLevel Integration Notes

### Current Integration
- **Form Embed URL:** `https://link.trustbasedseo.com/widget/form/{formId}`
- **Default Form ID:** `k8jDErhdZoQHf3eBLCoU`
- **Widget ID:** `696e669e9ec201ee9889bf3f`
- **Chat Widget Host:** `widgets.leadconnectorhq.com`

### Embedding Forms

```tsx
// Using HighLevelForm component
import { HighLevelForm } from "@/components/HighLevelForm";

<HighLevelForm
  formId="k8jDErhdZoQHf3eBLCoU"
  height="600px"
  className="w-full"
/>
```

### Custom Form IDs Needed

Once forms are created in HighLevel, update the following:

| Form | Current ID | New ID (TBD) |
|------|------------|--------------|
| Project Consultation | `k8jDErhdZoQHf3eBLCoU` | - |
| Insurance Restoration | - | - |
| Quick Contact | - | - |
| Commercial Consultation | - | - |

---

## Conversion Optimization Notes

### Form Placement (5 per page)
1. **Hero Section** - Primary form or prominent CTA to form
2. **After Service Description** - Contextual CTA
3. **After Portfolio/Proof Section** - "See what we can build for you"
4. **After FAQ Section** - "Still have questions?"
5. **Bottom of Page** - Full contact section with form

### Mobile Optimization
- Sticky CTA bar on mobile with phone icon
- Compact form variant for narrow screens
- Click-to-call prioritized over form on mobile

### A/B Testing Recommendations
- Test "Schedule Consultation" vs "Get Started" vs "Discuss Your Project"
- Test form length (compact vs full)
- Test project value dropdown order (ascending vs descending)

### Analytics Events to Track

```javascript
// Form start
gtag('event', 'form_start', {
  form_name: 'project_consultation',
  page_path: window.location.pathname
});

// Form completion
gtag('event', 'form_complete', {
  form_name: 'project_consultation',
  project_type: formData.projectType,
  project_value: formData.projectValue,
  page_path: window.location.pathname
});

// Form abandonment
gtag('event', 'form_abandon', {
  form_name: 'project_consultation',
  abandoned_field: lastFieldInteracted,
  page_path: window.location.pathname
});
```

---

## Privacy & Compliance

### Required Disclosures
- Link to Privacy Policy near form submission
- Consent checkbox for SMS communications
- TCPA compliance language for phone field

### Suggested Consent Text
```
By submitting this form, you consent to receive communications from Florida Construction Specialists via email and phone. You may opt out at any time. View our Privacy Policy.
```

### Data Retention
- Lead data stored in HighLevel CRM
- Form submissions retained for 7 years (business records)
- User can request data deletion via privacy@floridaconstructionspecialists.com
