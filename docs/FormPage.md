Pages with form or forms (wizard) are considered as form page

Form page should use `Page` with `form` as `layoutType`

![page layout type](./image/Page.png)
![form page](./image/FormPage.png)

### Breadcrumb Group
All pages should have **Breadcrumb Group**
- All labels are in **Title Case**
- Breadcrumb should have back page and **action** (e.g. Create, Edit). 
- For person profile form, person name / person profile tab name / action. Person name will link to person profile page while tab name will link to specific tab

### Back Button
All pages should have `backButtonProps` on Page component for **Back Button** 
- All labels are in **Title Case**
- It should be the **back page title**

### Page Title
Page title should be ‘**Action** Name’ ‘Item Name’

### Page Description
Descriptions are optional for other pages and should be used when more context is necessary.
- Description is **only required when page has limitation**. 
- **Limitation and warning should show in description** instead of callout.
