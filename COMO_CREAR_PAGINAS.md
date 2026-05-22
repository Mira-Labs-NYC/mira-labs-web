# 📖 Guía: Cómo Crear Nuevas Páginas en Mira Labs Web

## 🎯 Resumen
Esta guía te enseña cómo crear nuevas páginas en el sitio web de Mira Labs usando Next.js App Router.

---

## 📁 Estructura del Proyecto

```
mira-labs-web/
├── app/                          # Directorio principal de rutas
│   ├── page.tsx                  # Página principal (/)
│   ├── platform/                 # Página de plataforma (/platform)
│   │   └── page.tsx
│   ├── ria-onchain/              # Nueva página creada (/ria-onchain)
│   │   └── page.tsx
│   ├── strategies/               # Página de estrategias (/strategies)
│   │   └── page.tsx
│   └── ...otras páginas
├── components/                   # Componentes reutilizables
│   ├── dot-matrix-logo.tsx
│   ├── site-header.tsx
│   └── ...
└── ...
```

---

## 🚀 Paso a Paso: Crear una Nueva Página

### **Paso 1: Crear el Directorio**

Cada página en Next.js 13+ (App Router) necesita su propia carpeta dentro de `app/`.

```bash
# Sintaxis general:
mkdir -p app/[nombre-de-la-pagina]

# Ejemplo para ria-onchain:
mkdir -p app/ria-onchain

# Ejemplo para tokenización de Lidya:
mkdir -p app/lidya-tokenization
```

**Resultado:** La URL será `https://tudominio.com/nombre-de-la-pagina`

---

### **Paso 2: Crear el Archivo `page.tsx`**

Dentro del directorio creado, crea un archivo llamado `page.tsx`. Este archivo **siempre debe llamarse `page.tsx`**.

```bash
touch app/ria-onchain/page.tsx
```

---

### **Paso 3: Estructura Básica del Archivo**

Todo archivo `page.tsx` debe seguir esta estructura:

```typescript
"use client"; // ← IMPORTANTE si usas interactividad (useState, onClick, etc.)

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Shield, CheckCircle } from "lucide-react"; // Iconos

export default function NombreDeLaPagina() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Tu contenido aquí */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-light">Título de la Página</h1>
          <p className="mt-4 text-lg text-gray-600">
            Descripción de la página
          </p>
        </div>
      </section>
    </main>
  );
}
```

---

## 🎨 Componentes Principales de una Página

### **1. Hero Section (Sección Principal)**

```typescript
<section className="relative overflow-hidden bg-white py-20">
  <AnimatedDotPattern className="opacity-40" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
        Título Principal
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gray-600">
        Descripción del proyecto o servicio
      </p>
    </motion.div>
  </div>
</section>
```

### **2. Stats/Métricas**

```typescript
<div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
  {[
    { value: "90%", label: "Cost Reduction" },
    { value: "Real-Time", label: "Monitoring" },
    { value: "24/7", label: "Availability" },
    { value: "Zero", label: "Manual Work" },
  ].map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
      className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
    >
      <p className="text-3xl font-light text-gray-900">{stat.value}</p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
        {stat.label}
      </p>
    </motion.div>
  ))}
</div>
```

### **3. Features Grid (Características)**

```typescript
const features = [
  {
    icon: Shield,
    title: "Feature Title",
    description: "Feature description",
    benefits: [
      "Benefit 1",
      "Benefit 2",
      "Benefit 3",
    ],
  },
  // ... más features
];

// En el JSX:
<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-gray-100 p-3">
          <feature.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
```

### **4. CTA Section (Call to Action)**

```typescript
<section className="bg-gray-900 py-20">
  <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
    <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
      Ready to Get Started?
    </h2>
    <p className="mt-4 text-lg text-gray-300">
      Contact our team to learn more
    </p>

    <div className="mt-10">
      <a
        href="/contact"
        className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>
```

---

## 🎨 Sistema de Estilos (Tailwind CSS)

### **Colores Principales**
- `bg-white` - Fondo blanco
- `bg-gray-50` - Gris muy claro
- `bg-gray-900` - Gris oscuro/negro
- `text-gray-600` - Texto gris medio
- `text-gray-900` - Texto negro

### **Espaciado**
- `py-20` - Padding vertical (top y bottom)
- `px-6` - Padding horizontal (left y right)
- `gap-6` - Espaciado entre elementos en grid/flex
- `mt-4` - Margin top
- `mb-8` - Margin bottom

### **Responsive Design**
```typescript
className="text-sm md:text-base lg:text-lg"
// sm: >= 640px
// md: >= 768px
// lg: >= 1024px
// xl: >= 1280px
```

---

## 🔌 Iconos (Lucide React)

```typescript
import {
  Shield,      // Escudo
  CheckCircle, // Check circular
  Lock,        // Candado
  Globe2,      // Globo
  Activity,    // Actividad/gráfico
  Database,    // Base de datos
  Network,     // Red
  FileCheck,   // Archivo con check
} from "lucide-react";

// Uso:
<Shield className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
```

[Ver todos los iconos disponibles](https://lucide.dev/icons/)

---

## ✨ Animaciones (Framer Motion)

### **Animación de Entrada Básica**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}        // Estado inicial
  animate={{ opacity: 1, y: 0 }}         // Estado final
  transition={{ duration: 0.6 }}         // Duración
>
  Contenido
</motion.div>
```

### **Animación al Scroll**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}    // Se anima cuando entra en viewport
  viewport={{ once: true }}              // Solo se anima una vez
  transition={{ duration: 0.5 }}
>
  Contenido
</motion.div>
```

### **Animación con Delay**
```typescript
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}  // Delay incremental
  >
    {item.content}
  </motion.div>
))}
```

---

## 🔗 Enlaces y Navegación

### **Link Interno**
```typescript
<a href="/platform" className="...">
  Ver Plataforma
</a>
```

### **Link Externo**
```typescript
<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Sitio Externo
</a>
```

### **Botones con Estilos**
```typescript
// Botón primario (fondo oscuro)
<a
  href="/contact"
  className="rounded-md bg-gray-900 px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800"
>
  Contact Us
</a>

// Botón secundario (outline)
<a
  href="/learn-more"
  className="rounded-md border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
>
  Learn More
</a>
```

---

## 📋 Ejemplo Completo: Crear Página de Lidya Tokenization

### **1. Crear directorio**
```bash
mkdir -p app/lidya-tokenization
```

### **2. Crear archivo**
```bash
touch app/lidya-tokenization/page.tsx
```

### **3. Contenido básico**
```typescript
"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { TrendingUp, Lock, Wallet, BarChart3, CheckCircle } from "lucide-react";

export default function LidyaTokenizationPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <AnimatedDotPattern className="opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Lidya Fund Tokenization
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Access institutional-grade high-frequency trading strategies through
              tokenized fund shares on blockchain.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: "$XXM", label: "Fund AUM" },
              { value: "XX%", label: "Annual Return" },
              { value: "24/7", label: "Trading" },
              { value: "On-Chain", label: "Transparency" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-light text-gray-900">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Lidya Trading */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                About Lidya Trading
              </h2>
              <p className="mt-6 text-gray-600">
                Lidya Trading is a high-frequency trading fund specializing in quantitative
                strategies across digital and traditional markets. With proven track record
                and institutional-grade infrastructure, Lidya delivers consistent returns
                through sophisticated algorithmic trading.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Quantitative HFT strategies",
                  "Multi-asset class coverage",
                  "Institutional infrastructure",
                  "Risk-managed approach",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                Why Tokenization?
              </h2>
              <p className="mt-6 text-gray-600">
                Traditional hedge funds have high barriers to entry and limited liquidity.
                By tokenizing Lidya fund shares, we enable:
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Fractional ownership - Lower minimum investment",
                  "Enhanced liquidity - Trade 24/7 on secondary markets",
                  "Blockchain transparency - Real-time performance tracking",
                  "Automated distributions - Smart contract-based dividends",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Invest in Tokenized Lidya Shares
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Access institutional HFT strategies with blockchain transparency and liquidity
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Request Information
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Available to accredited investors only
          </p>
        </div>
      </section>
    </main>
  );
}
```

### **4. Resultado**
Tu página estará disponible en: `https://tudominio.com/lidya-tokenization`

---

## 🔧 Verificar que Funciona

```bash
# Desde el directorio del proyecto
cd /root/miralabs-projects/mira-labs-web

# Ejecutar el servidor de desarrollo
npm run dev

# Abrir en el navegador:
# http://localhost:3000/ria-onchain
# http://localhost:3000/lidya-tokenization
```

---

## 📝 Checklist para Nueva Página

- [ ] Crear directorio en `app/[nombre-pagina]/`
- [ ] Crear archivo `page.tsx`
- [ ] Agregar `"use client"` si usa interactividad
- [ ] Importar componentes necesarios (motion, icons, etc.)
- [ ] Crear función de componente con `export default`
- [ ] Agregar Hero Section
- [ ] Agregar secciones de contenido
- [ ] Agregar CTA
- [ ] Probar en navegador
- [ ] Verificar responsive design (mobile, tablet, desktop)

---

## 🎯 Tips y Mejores Prácticas

1. **Usa motion.div para animaciones** - Hace el sitio más dinámico
2. **Mantén estructura consistente** - Sigue el patrón de páginas existentes
3. **Mobile-first** - Usa clases responsive (`sm:`, `md:`, `lg:`)
4. **Usa max-width** - `max-w-7xl` para limitar el ancho en pantallas grandes
5. **Espaciado consistente** - `py-20` para secciones, `gap-6` para grids
6. **Iconos apropiados** - Elige iconos que representen bien el contenido
7. **CTAs claros** - Siempre incluye calls-to-action

---

## 🆘 Problemas Comunes

### Error: "use client" falta
```
Error: You're importing a component that needs useState...
```
**Solución:** Agrega `"use client"` en la primera línea del archivo

### Error: Cannot find module
```
Error: Cannot find module '@/components/...'
```
**Solución:** Verifica que los imports coincidan con la estructura del proyecto

### La página no aparece
**Solución:** Verifica que el archivo se llame exactamente `page.tsx` (minúsculas)

---

## 📚 Recursos Adicionales

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Creado:** Noviembre 2025
**Proyecto:** Mira Labs Web
**Autor:** Mira Labs Development Team
