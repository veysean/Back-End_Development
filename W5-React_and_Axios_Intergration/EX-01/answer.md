### **1. How did using `useEffect()` and `axios` help separate logic from UI?**

Using `useEffect()` and `axios` helps **separate concerns** in React component:

- **`useEffect()`** is used to handle **side effects**, like fetching data from an API. This keeps data-fetching logic **outside of the render flow**, making the UI code cleaner.
- **`axios`** abstracts away the complexity of making HTTP requests, allowing to write concise, readable code for API interactions.

**Benefit**: component becomes easier to maintain and test because the logic (data fetching) is clearly separated from the UI (JSX rendering).

---

### **2. What state challenges did you face while managing form input and API response?**

Some state challenges include:

- **Synchronizing form state with API data**: When editing an article, need to pre-fill the form with data from the API. If the data arrives late (after the component renders), the form might initially show empty fields.
- **Handling updates**: must ensure the form state updates only after the API call completes, or risk showing stale or incorrect data.
- **Validation and error handling**: Managing validation errors, API errors, and user feedback (like success messages) requires additional state variables (`error`, `loading`, etc.).
- **Controlled inputs**: Each input field must be tied to state, which can get verbose and error-prone if not managed carefully.

---

### **3. How does REST structure help React developers write cleaner frontend code?**

REST (Representational State Transfer) provides a **predictable and consistent API structure**, which benefits frontend developers such as:

- **Clear endpoints**: Each resource (e.g., `/articles`, `/articles/:id`) maps directly to a UI view or action, making it easy to design components around them.
- **Separation of concerns**: REST APIs handle data logic on the backend, allowing React components to focus purely on UI and user interaction.
- **Reusability**: can reuse the same API endpoints across different components (e.g., list view, detail view, update form).
- **Scalability**: As the app grows, RESTful patterns help keep frontend code modular and maintainable.
---
