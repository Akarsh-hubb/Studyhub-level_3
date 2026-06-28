# StudyHub Component Library

A custom, highly accessible React and TypeScript component library built with CSS Modules.

## Installation

Install the package via npm:

```bash
npm install studyhub-component-library
```

Ensure you have React (v18+) and React DOM installed as peer dependencies.

---

## Components & Usage Examples

### 1. Button

An interactive button or link element. Supports screen readers, aria-disabled attributes, visible focus visible styles, and custom keyboard inputs.

```tsx
import { Button } from 'studyhub-component-library';

function Example() {
  return (
    <div>
      {/* Primary Action Button */}
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Primary Action
      </Button>

      {/* Disabled State */}
      <Button variant="secondary" disabled>
        Disabled State
      </Button>

      {/* Renders as Link button */}
      <Button variant="danger" href="https://github.com">
        GitHub Profile Link
      </Button>
    </div>
  );
}
```

---

### 2. Card

A responsive content layout card wrapping semantic container tags (`article` or `section`) and linking headings using `aria-labelledby` IDs.

```tsx
import { Card, Button } from 'studyhub-component-library';

function Example() {
  return (
    <Card
      title="Secure Workspace"
      subtitle="Authorized access only"
      tag="article"
      border={false}
      actions={
        <>
          <Button variant="primary" size="sm">Open</Button>
          <Button variant="secondary" size="sm">Cancel</Button>
        </>
      }
    >
      <p>This is the main body content of the card.</p>
    </Card>
  );
}
```

---

### 3. Navbar

Responsive navigation header component supporting accessibility nav landmarks, toggle-control parameters, and active page current checks.

```tsx
import { Navbar, Button } from 'studyhub-component-library';

function Example() {
  const links = [
    { href: '/', label: 'Home', active: true },
    { href: '/dashboard', label: 'Dashboard', active: false },
    { href: '/profile', label: 'Profile', active: false },
  ];

  return (
    <Navbar
      brand={<a href="/">📚 StudyHub</a>}
      links={links}
      rightContent={
        <>
          <span style={{ color: '#38bdf8', fontWeight: 600 }}>Alex Smith</span>
          <Button variant="danger" size="sm">Logout</Button>
        </>
      }
      ariaLabel="Main Navigation"
    />
  );
}
```

---

### 4. FormField

Accessible input wrapper layout. Forms labels link directly to input via uniquely generated `htmlFor`/`id` combinations, handles aria-describedby for validation error display, and applies validation status focus rings.

```tsx
import React, { useState } from 'react';
import { FormField, Button } from 'studyhub-component-library';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      setError('Username cannot be empty.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Username"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={error}
        helperText="Enter your alphanumeric username."
        required
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
```
