# React + TypeScript + Vite

Component Library Lab
Overview
This project demonstrates the creation of reusable, type-safe UI components using React and TypeScript. The goal is to simulate building a foundational component library for internal company applications, focusing on flexibility, maintainability, and strong typing.

The components are designed to be configurable through props and reusable across multiple contexts, supporting different display and behavior requirements.

Features
Reusable React components
Strongly typed props using TypeScript interfaces
Optional and default prop handling
Component composition patterns
Clean separation between data and presentation
Configurable UI behavior through props

Technologies Used
Vite
React
TypeScript
Tailwind CSS

Project Structure
src/
  components/
    AlertBox/
      AlertBox.tsx
      AlertBox.test.tsx
    UserProfileCard/
      UserProfileCard.tsx
      UserProfileCard.test.tsx
    ProductDisplay/
      ProductDisplay.tsx
      ProductDisplay.test.tsx
  types/
    index.ts
components/: Contains reusable UI components
types/: Centralized TypeScript interfaces and types

Key Components
UserProfileCard
Displays user information such as name, email, role, and avatar.
Props include:
user: User object containing profile data
showEmail: Toggle email visibility
showRole: Toggle role visibility
onEdit: Optional callback for edit actions
children: Additional content for composition

ProductDisplay
Displays product information with configurable UI options.
Props include:
product: Product object containing product details
showDescription: Toggle description visibility
showStockStatus: Toggle stock display
onAddToCart: Optional callback for cart actions
children: Additional UI content
Usage Example
<ProductDisplay
  product={product1}
  showDescription={true}
  showStockStatus={true}
  onAddToCart={(id) => alert(`Added product ${id}`)}
>
  <div>Free shipping available</div>
</ProductDisplay>

Design Approach
This project follows a component-driven architecture where:
Data objects are defined separately
Display configurations are created using prop objects
Components focus only on rendering UI based on props
Destructuring syntax is used to pass props cleanly and efficiently

Reflection
How did you handle optional props in your components?
Optional props were handled in two ways. First, the ? operator was used in TypeScript interfaces to mark props as optional. Within the components, default values were applied through destructuring (for example, showDescription = true) to ensure consistent behavior when props were not provided.
Additionally, fallback logic was implemented for certain optional fields such as the avatar. Since optional properties in TypeScript are treated as a union with undefined (e.g., string | undefined), the component could safely check for missing values and substitute a default image when no avatar was provided. This ensured that the UI remained visually consistent even when optional data was absent.

What considerations did you make when designing the component interfaces?
The interfaces were designed to keep related data grouped together, such as passing a full user or product object instead of individual fields. This made the components easier to use and aligned with real-world data structures.
Flexibility was also a key consideration. Optional props were included to allow components to be configured for different use cases without requiring multiple versions of the same component. At the same time, care was taken to avoid overcomplicating the interfaces and to keep them intuitive and maintainable.

How did you ensure type safety across your components?
Type safety was ensured by defining centralized TypeScript interfaces in a shared types file and consistently applying those types across all components and test configurations.
Each component explicitly typed its props, and configuration objects (such as ProductDisplayProps) were also typed to ensure consistency. This allowed TypeScript to catch errors at compile time, such as missing or incorrectly typed props, reducing the likelihood of runtime issues.

What challenges did you face when implementing component composition?
One of the main challenges was understanding how to effectively use the children prop to allow flexible content injection without breaking component structure. It required careful planning to ensure that additional content could be added without affecting the layout.
Another challenge was avoiding unintended recursive rendering, such as accidentally rendering a component inside itself. Managing prop structures between test files and components also required attention to ensure that all expected props were correctly passed and typed.

Conclusion
This project demonstrates best practices for building reusable, type-safe React components using TypeScript. It highlights the importance of strong typing, thoughtful interface design, and flexible component composition in creating scalable frontend applications.