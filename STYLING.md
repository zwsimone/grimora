# BEM (Block–Element–Modifier) Guideline

A clear and consistent CSS methodology for scalable, maintainable front-end design.

---

## 1. What is BEM?

**BEM** stands for **Block–Element–Modifier**.
It’s a naming convention for CSS classes that keeps styles modular, predictable, and reusable.

**Syntax:**

```scss
.block {
}
.block__element {
}
.block--modifier {
}
```

---

## 2. Definitions

| Term         | Description                                          | Example                                   |
| ------------ | ---------------------------------------------------- | ----------------------------------------- |
| **Block**    | A standalone component that can exist independently. | `.card`, `.button`, `.navbar`             |
| **Element**  | A part of a block that performs a specific function. | `.card__header`, `.button__icon`          |
| **Modifier** | A variation or state of a block or element.          | `.card--highlighted`, `.button--disabled` |

---

## 3. Naming Rules

- Use **lowercase letters**, numbers, and hyphens only.
- Do **not** use camelCase or underscores (except `__` and `--`).
- Use **semantic** names, not positional ones (e.g. `.card__title`, not `.card__top`).
- One class = one purpose.

**Pattern:**

```
.block-name
.block-name__element-name
.block-name--modifier-name
```

---

## 4. Folder / File Structure

Example for an Angular component:

```
/src/app/components/
  card/
    card.component.html
    card.component.scss
    card.component.ts
```

Inside `card.component.scss`:

```scss
.card {
    &__header {
        font-weight: 600;
    }

    &__body {
        padding: 1rem;
    }

    &__footer {
        text-align: right;
    }

    &--highlighted {
        border-color: var(--accent-color);
    }
}
```

---

## 5. Example: Button Component

### HTML

```html
<button class="button button--primary">
    <span class="button__icon bi bi-plus"></span>
    <span class="button__label">Add Item</span>
</button>
```

### SCSS

```scss
.button {
    display: inline-flex;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    &__icon {
        margin-right: 0.5rem;
    }

    &__label {
        font-weight: 500;
    }

    &--primary {
        background-color: #007bff;
        color: white;
    }

    &--secondary {
        background-color: #6c757d;
        color: white;
    }

    &--disabled {
        opacity: 0.6;
        pointer-events: none;
    }
}
```

---

## 6. Example: Card with Nested Elements

### HTML

```html
<div class="card card--compact">
    <div class="card__header">
        <h2 class="card__title">Session Notes</h2>
    </div>
    <div class="card__body">
        <p class="card__text">You can store your D&D session logs here.</p>
    </div>
    <div class="card__footer">
        <button class="button button--primary">Open</button>
    </div>
</div>
```

### SCSS

```scss
.card {
    background: #1e1e1e;
    border-radius: 10px;
    padding: 1rem;

    &__header,
    &__footer {
        padding: 0.5rem 0;
    }

    &__title {
        font-size: 1.25rem;
        margin: 0;
    }

    &__body {
        margin-bottom: 1rem;
    }

    &--compact {
        padding: 0.5rem;
    }
}
```

---

## 7. State Modifiers vs. Utility Classes

**BEM Modifier (component-specific):**

```html
<button class="button button--loading">Loading...</button>
```

**Utility Class (global helper):**

```html
<button class="button u-hidden">Hidden</button>
```

**Rule of thumb:**
Use BEM for component-specific variants,
and use utility classes (`.u-*`) for cross-component behavior or layout helpers.

---

## 8. Recommended Global Naming Patterns

| Type        | Prefix         | Example                                         |
| ----------- | -------------- | ----------------------------------------------- |
| **Utility** | `u-`           | `.u-text-center`, `.u-hidden`, `.u-margin-auto` |
| **Layout**  | `l-`           | `.l-grid`, `.l-flex-center`                     |
| **Theme**   | `t-`           | `.t-dark`, `.t-light`                           |
| **State**   | `is-` / `has-` | `.is-active`, `.has-error`                      |

---

## 9. Angular-Specific Tips

- Each component’s `.scss` should define styles scoped to one block.
- Use Angular’s `[class.block--modifier]="condition"` for conditional styles.

**Example:**

```html
<button class="button" [class.button--disabled]="isDisabled">Save</button>
```

---

## 10. Quick Reference Summary

| Type               | Syntax                               | Example               |
| ------------------ | ------------------------------------ | --------------------- |
| **Block**          | `.block`                             | `.menu`               |
| **Element**        | `.block__element`                    | `.menu__item`         |
| **Modifier**       | `.block--modifier`                   | `.menu--horizontal`   |
| **Nested Element** | `.block__element__subelement` (rare) | `.card__footer__icon` |
| **State**          | `.is-*` / `.has-*`                   | `.is-active`          |
| **Utility**        | `.u-*`                               | `.u-text-center`      |
