# Container Component

Un composant Container totalement paramétrable pour gérer les marges internes (padding) et externes (margin) de vos contenus.

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | **Requis** - Contenu du container |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl' \| 'full' \| 'none'` | `'xl'` | Largeur maximale du container |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | - | Padding interne (toutes directions) |
| `paddingX` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | - | Padding horizontal spécifique |
| `paddingY` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | - | Padding vertical spécifique |
| `margin` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'auto'` | - | Margin externe (toutes directions) |
| `marginX` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'auto'` | - | Margin horizontal spécifique |
| `marginY` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'auto'` | - | Margin vertical spécifique |
| `center` | `boolean` | `true` | Centrer le container horizontalement |
| `className` | `string` | `''` | Classes CSS personnalisées |
| `id` | `string` | - | ID HTML du container |
| `as` | `'div' \| 'section' \| 'article' \| 'main' \| 'aside' \| 'header' \| 'footer' \| 'nav'` | `'div'` | Balise HTML sémantique |

## 📏 Correspondance des tailles

### Max Width
- `sm` → `max-w-sm` (384px)
- `md` → `max-w-md` (448px)
- `lg` → `max-w-lg` (512px)
- `xl` → `max-w-xl` (576px)
- `2xl` → `max-w-2xl` (672px)
- `3xl` → `max-w-3xl` (768px)
- `4xl` → `max-w-4xl` (896px)
- `5xl` → `max-w-5xl` (1024px)
- `6xl` → `max-w-6xl` (1152px)
- `7xl` → `max-w-7xl` (1280px)
- `full` → `max-w-full` (100%)
- `none` → Pas de limite

### Padding & Margin
- `none` → `0` (0px)
- `xs` → `2` (8px)
- `sm` → `4` (16px)
- `md` → `6` (24px)
- `lg` → `8` (32px)
- `xl` → `12` (48px)
- `2xl` → `16` (64px)
- `auto` → `auto` (uniquement pour margin)

## 💡 Exemples d'utilisation

### Container basique centré

```tsx
import Container from '@/components/ui/Container'

<Container maxWidth="4xl" paddingX="md" paddingY="lg">
  <h1>Mon contenu</h1>
  <p>Lorem ipsum dolor sit amet...</p>
</Container>
```

### Container pleine largeur

```tsx
<Container maxWidth="full" padding="xl" className="bg-gray-100">
  <h1>Bannière pleine largeur</h1>
</Container>
```

### Container avec marges personnalisées

```tsx
<Container 
  maxWidth="2xl" 
  paddingX="lg" 
  paddingY="md"
  marginY="xl"
  className="bg-white shadow-lg"
>
  <h2>Carte avec espacement vertical</h2>
</Container>
```

### Container semantic (section)

```tsx
<Container 
  as="section" 
  maxWidth="3xl" 
  padding="2xl"
  id="about-section"
>
  <h2>À propos</h2>
  <p>Section avec HTML sémantique</p>
</Container>
```

### Container non centré

```tsx
<Container 
  maxWidth="lg" 
  paddingX="md"
  center={false}
  className="border-l-4 border-primary"
>
  <p>Aligné à gauche</p>
</Container>
```

### Containers imbriqués

```tsx
<Container maxWidth="6xl" padding="xl" className="bg-gray-900">
  <Container maxWidth="3xl" padding="lg" className="bg-white">
    <h3>Container enfant</h3>
  </Container>
</Container>
```

### Grid de containers

```tsx
<Container maxWidth="6xl" paddingX="md">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Container maxWidth="none" padding="lg" className="bg-white shadow-md">
      <h3>Card 1</h3>
    </Container>
    <Container maxWidth="none" padding="lg" className="bg-white shadow-md">
      <h3>Card 2</h3>
    </Container>
    <Container maxWidth="none" padding="lg" className="bg-white shadow-md">
      <h3>Card 3</h3>
    </Container>
  </div>
</Container>
```

## 🎯 Cas d'usage

1. **Layout de page** - Conteneur principal pour le contenu
2. **Sections** - Espacer et limiter la largeur des sections
3. **Cards** - Créer des cartes avec padding personnalisé
4. **Grids** - Wrapper pour les grilles responsive
5. **Nested layouts** - Créer des layouts complexes imbriqués

## ⚡ Bonnes pratiques

- Utilisez `paddingX` et `paddingY` au lieu de `padding` pour plus de contrôle
- Préférez `marginY` pour l'espacement vertical entre sections
- Utilisez `as` pour une meilleure sémantique HTML
- Combinez avec `className` pour des styles personnalisés
- Pour les pages, utilisez généralement `maxWidth="6xl"` ou `maxWidth="7xl"`

## 🔗 Voir aussi

- [Button Component](./Button.md)
- [Card Component](./Card.md)
- [Page d'exemples](/container-examples)
