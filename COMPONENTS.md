# Component Documentation

## Overview

This document provides detailed information about each reusable component in the Personal Site project. Each component follows React best practices with encapsulated styling, clear props interfaces, and reusable logic.

## Component Categories

### 1. Layout Components

#### Content.jsx
**Purpose**: Main routing container for the application
**Location**: `src/components/Content/Content.jsx`
**Props**: None
**State**: None
**Key Features**:
- Uses `react-router-dom` for client-side routing
- Defines two routes: home page (`/`) and external redirect (`/app`)
- Wraps content in React Fragment (`<>`)

#### App.jsx
**Purpose**: Root application component
**Location**: `src/App.jsx`
**Props**: None
**State**: None
**Key Features**:
- Wraps application in React StrictMode for development safety
- Uses BrowserRouter for HTML5 history API
- Imports global CSS and internationalization setup

### 2. UI Components

#### Button.jsx / ButtonGithub.jsx / ButtonWeb.jsx
**Purpose**: Custom button variants with hover effects
**Location**: `src/components/Button/`
**Props** (common):
- `children`: Button label/content
- `onClick`: Click handler
- `className`: Additional CSS classes
**Variants**:
- **Button.jsx**: Primary button with gradient hover effect
- **ButtonGithub.jsx**: GitHub-branded button with icon
- **ButtonWeb.jsx**: Web technology button with icon
**Key Features**:
- CSS transition effects for smooth hover animations
- Icon integration using SVG assets
- Responsive touch targets
- Accessible button semantics

#### Card.jsx
**Purpose**: Container component with elevation and shadow effects
**Location**: `src/components/Card/Card.jsx`
**Props**:
- `children`: Content to display inside the card
- `height`: Optional fixed height (used for responsive design)
- `className`: Additional CSS classes
**Key Features**:
- Box shadow for depth perception
- Border radius for modern appearance
- Flexible container for any content
- Responsive height adjustment via props
- Overflow handling for content

#### Footer.jsx
**Purpose**: Page footer with social links and copyright
**Location**: `src/components/Footer/Footer.jsx`
**Props**: None
**State**: None
**Key Features**:
- Social media icon links (GitHub, LinkedIn, etc.)
- Copyright information with current year
- Responsive layout for mobile devices
- Hover effects on social icons
- Centered content layout

#### Divider.jsx
**Purpose**: Section separator with customizable text
**Location**: `src/components/Divider/Divider.jsx`
**Props**:
- `text`: JSX element to display in the divider (usually translated text)
**Key Features**:
- Horizontal line with centered text
- Flexible content accepts any JSX (translated strings, icons, etc.)
- Responsive design that works on different screen sizes
- Customizable styling via CSS

#### NavBar.jsx
**Purpose**: Responsive navigation bar with dropdown menus
**Location**: `src/components/NavBar/NavBar.jsx`
**Props**: None
**State**: Manages dropdown open/close state
**Subcomponents**:
- **NavBarButton.jsx**: Individual navigation button
- **NavBarDropDownButton.jsx**: Navigation button with dropdown menu
**Key Features**:
- Responsive design (collapses on mobile)
- Dropdown menus for organized navigation
- Smooth animations for dropdown open/close
- Active link highlighting
- Logo/brand area
- Accessible keyboard navigation

### 3. Content Components

#### ContentHome.jsx
**Purpose**: Main homepage component containing all visible sections
**Location**: `src/components/ContentHome/ContentHome.jsx`
**Props**: None
**State**:
- `expandedId`: ID of currently expanded project card
- `heightCard`: Responsive height for cards based on screen width
- `cardRefs`: Refs to DOM elements for smooth scrolling
**Key Features**:
- Complex layout with multiple sections (hero, about, timeline, projects, contact)
- Responsive design adjustments (card height changes at 992px breakpoint)
- Smooth scrolling to expanded cards
- Window resize event listener for responsive adjustments
- Project card expansion/collapse functionality
- Internationalization integration throughout

#### TimeLine.jsx
**Purpose**: Vertical timeline displaying education and work experience
**Location**: `src/components/TimeLine/TimeLine.jsx`
**Props**: None
**State**: None
**Subcomponents**:
- **TimeLineCollege.jsx**: Education timeline item
- **TImeLineWork.jsx**: Work experience timeline item
- **TimeLineCertificate.jsx**: Certification timeline item
**Key Features**:
- Vertical timeline layout with connecting line
- Different icons/styles for education, work, and certificates
- Date ranges displayed prominently
- Descriptive text for each timeline entry
- Responsive layout that works on mobile

#### MostTech.jsx
**Purpose**: Technology stack visualization component
**Location**: `src/components/MostTech/MostTech.jsx`
**Props**: None
**State**: None
**Key Features**:
- Grid layout of technology icons
- Hover effects on technology icons
- Responsive grid that adjusts column count
- Tooltips or labels for technologies (in CSS)
- Animation on hover/focus

#### ContatosList.jsx
**Purpose**: Contact information display with clickable links
**Location**: `src/components/ContatosList/ContatosList.jsx`
**Props**: None
**State**: None
**Key Features**:
- List of contact methods (email, phone, social media, etc.)
- Clickable icons that open appropriate apps/links
- Responsive layout (vertical on mobile, horizontal on desktop)
- Hover effects on contact icons
- Accessible labels for screen readers
- External link handling with target="_blank" and rel attributes

#### Article.jsx
**Purpose**: Blog post preview component
**Location**: `src/components/Article/Article.jsx`
**Props**:
- `text`: Article title/text to display
- `link`: URL for the article (optional)
- `svg`: SVG icon to display (optional, for icon-only variant)
- `external`: Boolean to indicate if link opens in new tab
**Variants**:
- Text-only article link
- Article with SVG icon and link
- Icon-only article (used for "more articles" link)
**Key Features**:
- Flexible display options (text, icon, or both)
- Hover effects for interactive elements
- External link handling
- Truncation/overflow handling for long text
- Responsive layout

#### Sliding.jsx
**Purpose**: Animated sliding element (decorative)
**Location**: `src/components/Sliding/Sliding.jsx`
**Props**: None
**State**: None
**Key Features**:
- CSS animation for sliding movimiento
- Likely used as decorative background element
- Responsive sizing
- Looping animation
- Z-index management for layering

#### SlideShow.jsx
**Purpose**: Image carousel/slider component
**Location**: `src/components/SlideShow/SlideShow.jsx`
**Props**: None (appears to use SlideItem subcomponent)
**State**: Likely manages current slide index
**Subcomponents**:
- **SlideItem.jsx**: Individual slide item
**Key Features**:
- Auto-advancing or manual slide navigation
- Slide transition effects (fade, slide, etc.)
- Navigation arrows/dots
- Responsive image sizing
- Pause on hover functionality
- Accessible controls

#### SvgComponents/FolderSvg.jsx
**Purpose**: Reusable SVG folder icon
**Location**: `src/components/SvgComponents/FolderSvg.jsx`
**Props**: Standard SVG props (width, height, className, etc.)
**State**: None
**Key Features**:
- Scalable vector graphic
- Single color (currentColor) for easy theming
- Optimized SVG path data
- Accessible (should include aria-label or role when used)

### 4. Specialized Components

#### ProjectCard.jsx
**Purpose**: Interactive project showcase cards with expand/collapse functionality
**Location**: `src/components/ProjectCard/ProjectCard.jsx`
**Props**:
- `project`: Project name (string)
- `tags`: Array of technology/tool tags
- `thumbnailColor`: Hex color for project indicator
- `githubUrl`: Link to GitHub repository
- `viewUrl`: Link to live demo/deployed version
- `icons`: Array of technology icons to display
- `slideImgUrl`: Array of image URLs for slideshow
- `expanded`: Boolean indicating if card is expanded
- `hidden`: Boolean indicating if card should be hidden
- `onExpand`: Callback function when expanding card
- `onClose`: Callback function when collapsing card
- `cardRef`: Function to set ref to DOM element
- `key`: React key for list rendering
**State**: Managed by parent ContentHome component
**Key Features**:
- Grid layout that adapts to screen size
- Hover effects on card
- Expand/collapse animation with smooth height transition
- Project information display (name, tags, description)
- Technology icon badges
- Screenshot slideshow/gallery
- External links to GitHub and live demo
- Smooth scrolling when expanding
- Responsive design (stacked on mobile, grid on desktop)
- Accessible button interactions

#### Redirect.jsx
**Purpose**: Component that redirects to external URLs
**Location**: `src/components/Redirect/Redirect.jsx`
**Props**:
- `url`: Target URL for redirection
**State**: None
**Key Features**:
- Uses `useEffect` to perform redirect on mount
- Prevents redirect during server-side rendering (if applicable)
- Handles URL validation (should be implemented)
- Provides seamless user experience to external resources
- Could include loading state or confirmation in future

#### Translator.js
**Purpose**: Wrapper around i18next translation function
**Location**: `src/i18n/Translator.js`
**Props**:
- `path`: Translation key path (string or object)
- Returns translated string or JSX element
**State**: None (uses i18next instance)
**Key Features**:
- Provides easy access to translation function in JSX
- Handles nested translation keys
- Supports interpolation and formatting
- Falls back to default language if translation missing
- Can return JSX for rich text translations

## Component Communication Patterns

### 1. Props Drilling
- Data flows from parent to children through props
- Example: `ContentHome.jsx` passes state and handlers to `ProjectCard.jsx`
- Example: Language selection would flow from context/i18n to `Translator` components

### 2. Callback Functions
- Children communicate state changes back to parents through callback props
- Example: `ProjectCard.jsx` calls `onExpand()` and `onClose()` passed from parent
- Example: Button clicks call handlers passed as props

### 3. Refs for DOM Access
- Parent components create refs and pass them to children for direct DOM manipulation when needed
- Example: `ContentHome.jsx` creates refs and passes `cardRef` prop to `ProjectCard.jsx` for smooth scrolling

### 4. Context API (Implied)
- Internationalization uses i18next context implicitly through the `Translator` wrapper
- Potential for theme context or user preferences context

## Styling Approach

### CSS Modules
- Each component has its own CSS file (e.g., `Card.css`, `Button.css`)
- Scoped styling prevents conflicts
- Naming convention: descriptive class names, BEM-like in some cases

### Global Styles
- `index.css`: Reset styles, base typography, CSS variables
- `App.css`: Application-level styles
- Component-specific styles override or extend as needed

### Responsive Design
- Media queries in component CSS files
- Fluid layouts using percentages, flexbox, and grid
- Breakpoints defined globally (notably 992px for card height)
- Mobile-first approach

### Animations
- CSS transitions for hover effects (typically 0.3s ease)
- CSS keyframes for complex animations (pulse, slide, etc.)
- Animation performance considerations (using transform and opacity when possible)

## Accessibility Features

### Implemented
- Semantic HTML elements (buttons, links, headings, lists)
- Alt text for images where provided
- Proper heading hierarchy (h1, h2, h3)
- Keyboard-navigable interactive elements
- Sufficient color contrast in most areas (verification needed)
- Focus styles for interactive components

### Opportunities for Improvement
- Add explicit `aria-label` to icon-only buttons
- Ensure all interactive elements have accessible names
- Add `role` attributes where semantic HTML isn't sufficient
- Implement skip-to-content links
- Add landmark roles (nav, main, footer)
- Ensure color contrast meets WCAG AA/AAA standards
- Add focus trap for modal-like behaviors (if any)

## Performance Considerations

### Bundle Optimization
- Code splitting via Vite's dynamic imports (not currently used but available)
- Lazy loading routes (not implemented but possible with react-router-dom)
- Asset optimization (images should be web-optimized)

### Rendering Performance
- React 18 concurrent features enabled by default
- Minimal unnecessary re-renders (hooks used appropriately)
- Expensive computations memoized where needed (could use useMemo/useCallback)
- Virtual scrolling opportunity for long lists (not currently needed)

### Asset Loading
- Images loaded from src with relative paths
- Consider implementing lazy loading for below-the-fold images
- SVG icons are inline or as components for minimal HTTP requests
- Consider using SVG sprites for icon-heavy interfaces

## Extensibility Guidelines

### Adding New Components
1. Create directory in `src/components/` with component name
2. Create `.jsx` file and `.css` file
3. Follow existing prop patterns and styling conventions
4. Export component as named export
5. Import and use where needed

### Modifying Existing Components
1. Maintain backward compatibility for props when possible
2. Update corresponding CSS file for styling changes
3. Consider creating variants rather than modifying existing behavior
4. Update documentation if API changes

### Adding New Languages
1. Create new JSON file in `src/i18n/locales/` with language code
2. Add translation keys matching existing files
3. Update i18n initialization to include new language
4. Provide language switching mechanism in UI

### Theme Support
1. Define CSS variables in `index.css` or `:root`
2. Use `var(--variable-name)` in component CSS
3. Create theme context or use CSS class switching on body/html
4. Implement theme toggle UI component

## Testing Considerations

### Unit Testing
- Test component rendering with different props
- Test state changes and user interactions
- Test conditional rendering logic
- Test edge cases (empty values, null props, etc.)

### Integration Testing
- Test component composition (e.g., ContentHome with ProjectCards)
- Test routing behavior
- Test internationalization fallback
- Test responsive breakpoints

### E2E Testing
- Test user flows (navigation, project exploration, language switching)
- Test performance metrics
- Test accessibility with axe or similar tools
- Test across different browsers and devices

## Dependencies and Coupling

### Low Coupling Components (Good for Reuse)
- Button.jsx
- Card.jsx
- Divider.jsx
- Translator.js
- Footer.jsx (with minor modifications)
- SvgComponents/FolderSvg.jsx

### Medium Coupling Components (Context Dependent)
- NavBar.jsx (depends on routing structure)
- TimeLine.jsx (data structure specific)
- MostTech.jsx (expects specific icon set)

### High Coupling Components (Specific to This Application)
- ContentHome.jsx (highly specific layout)
- ProjectCard.jsx (specific to project showcase)
- Article.jsx (specific to blog presentation)
- ContatosList.jsx (specific contact methods)

## Future Enhancements

### Component Library Approach
- Extract reusable components (Button, Card, Divider) to shared library
- Create storybook for component documentation and testing
- Define clear component API contracts

### Advanced Patterns
- Implement compound components for complex UI (like NavBar with dropdowns)
- Use render props or children-as-functions patterns for flexibility
- Implement provider pattern for theme/language context

### Performance Optimizations
- Implement lazy loading for images and components
- Add react-window or similar for virtualized lists (if needed)
- Implement image placeholder/LQIP technique
- Add service worker for offline capabilities

### Accessibility Improvements
- Implement comprehensive ARIA labeling
- Add keyboard navigation traps for complex widgets
- Implement skip links and landmark roles
- Add reduced motion preferences support
- Implement screen reader announcements for dynamic changes

## Conclusion

The component architecture of this personal portfolio site demonstrates solid React fundamentals with clear separation of concerns, reusable UI elements, and maintainable code organization. Each component follows consistent patterns for props, state, and styling, making the codebase predictable and easy to extend.

The component hierarchy is logical, with layout components at the top, UI primitives in the middle, and specialized content components at the leaves. Data flows downward through props, while actions flow upward through callback functions, following React best practices.

While the current implementation is effective for a portfolio site, there are clear paths for enhancement in areas of performance, accessibility, and scalability should the project grow in complexity or user base.