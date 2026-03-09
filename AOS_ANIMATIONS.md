# AOS (Animate On Scroll) Setup & Usage Guide

## Installation ✅
AOS has been installed and initialized in `src/App.tsx`

## Configuration
AOS is configured with:
- **Duration**: 800ms (animation duration)
- **Offset**: 100px (trigger point before element comes into view)
- **Once**: false (animations repeat on scroll)
- **Easing**: ease-in-out

## Available Animations

### Basic Animations
```tsx
// Fade in
data-aos="fade"

// Fade variations
data-aos="fade-up"
data-aos="fade-down"
data-aos="fade-left"
data-aos="fade-right"
data-aos="fade-up-left"
data-aos="fade-up-right"
data-aos="fade-down-left"
data-aos="fade-down-right"
```

### Flip Animations
```tsx
data-aos="flip-left"
data-aos="flip-right"
data-aos="flip-up"
data-aos="flip-down"
```

### Slide Animations
```tsx
data-aos="slide-up"
data-aos="slide-down"
data-aos="slide-left"
data-aos="slide-right"
```

### Zoom Animations
```tsx
data-aos="zoom-in"
data-aos="zoom-in-up"
data-aos="zoom-in-down"
data-aos="zoom-in-left"
data-aos="zoom-in-right"
data-aos="zoom-out"
data-aos="zoom-out-up"
data-aos="zoom-out-down"
data-aos="zoom-out-left"
data-aos="zoom-out-right"
```

### Bounce Animations
```tsx
data-aos="bounce-in"
data-aos="bounce-in-up"
data-aos="bounce-in-down"
data-aos="bounce-in-left"
data-aos="bounce-in-right"
```

### Rotate Animations
```tsx
data-aos="rotate-in"
data-aos="rotate-in-up"
data-aos="rotate-in-down"
data-aos="rotate-in-left"
data-aos="rotate-in-right"
```

### Attention Seeker
```tsx
data-aos="attention-shake"
data-aos="attention-pulse"
data-aos="attention-beat"
data-aos="attention-flash"
data-aos="attention-bounce"
data-aos="attention-shake"
data-aos="attention-tada"
data-aos="attention-wobble"
data-aos="attention-jello"
```

## Usage Examples

### Simple fade-up animation
```tsx
<div data-aos="fade-up">
  Your content here
</div>
```

### With custom duration and delay
```tsx
<div 
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="200"
>
  Your content here
</div>
```

### With anchor offset
```tsx
<div 
  data-aos="fade-up"
  data-aos-offset="50"
>
  Your content here
</div>
```

### Trigger once and keep it
```tsx
<div 
  data-aos="fade-up"
  data-aos-once="true"
>
  Your content here
</div>
```

### Complex example with multiple attributes
```tsx
<div 
  data-aos="zoom-in"
  data-aos-duration="1200"
  data-aos-delay="300"
  data-aos-offset="200"
  data-aos-easing="ease-in-out-bounce"
  data-aos-once="true"
>
  Animated content
</div>
```

## Data Attributes

| Attribute | Values | Default |
|-----------|--------|---------|
| `data-aos` | animation name | required |
| `data-aos-duration` | milliseconds (100-3000) | 400 |
| `data-aos-delay` | milliseconds (0+) | 0 |
| `data-aos-offset` | pixels (0+) | 120 |
| `data-aos-easing` | easing function | ease-in-out-quad |
| `data-aos-once` | true/false | false |
| `data-aos-anchor` | CSS selector | null |
| `data-aos-mirror` | true/false | false |

## Easing Functions Available
- linear
- ease-in-quad
- ease-out-quad
- ease-in-out-quad
- ease-in-cubic
- ease-out-cubic
- ease-in-out-cubic
- ease-in-quart
- ease-out-quart
- ease-in-out-quart
- ease-in-quint
- ease-out-quint
- ease-in-out-quint
- ease-in-sine
- ease-out-sine
- ease-in-out-sine
- ease-in-expo
- ease-out-expo
- ease-in-out-expo
- ease-in-circ
- ease-out-circ
- ease-in-out-circ
- ease-in-back
- ease-out-back
- ease-in-out-back
- ease-in-elastic
- ease-out-elastic
- ease-in-out-elastic
- ease-in-bounce
- ease-out-bounce
- ease-in-out-bounce

## JavaScript Control (Optional)

```tsx
import AOS from 'aos';

// Refresh AOS after dynamic content loaded
AOS.refreshHard();

// Or just refresh
AOS.refresh();
```

## Tips for Best Results

1. **Use different animations** for different sections to create visual interest
2. **Combine with delays** to create sequential animations
3. **Use `data-aos-once="true"`** for important elements you only want to animate once
4. **Adjust `data-aos-offset`** for when you want elements to start animating
5. **Use longer durations** (1000-1200ms) for dramatic effects
6. **Use shorter durations** (400-600ms) for subtle effects

## Apply to Sections

Example of animating a section:
```tsx
<section 
  data-aos="fade-up"
  data-aos-duration="800"
>
  <h2 data-aos="zoom-in" data-aos-delay="200">
    Section Title
  </h2>
  <p data-aos="fade-up" data-aos-delay="400">
    Section content
  </p>
</section>
```

## Performance Tips

- Use `data-aos-once="true"` for animations that should only happen once
- Avoid too many simultaneous animations on the same page
- Use reasonable durations (not too long)
- Test on mobile devices for smooth performance

Now you can add animations to any component by simply adding `data-aos` attributes!
