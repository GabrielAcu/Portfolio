# 🚀 Guía de Deployment a Vercel

## Pasos para Deployar tu Portfolio

### 1. Preparación (Ya completado ✅)
- ✅ Código subido a GitHub: https://github.com/GabrielAcu/Portfolio.git
- ✅ Rama principal: `main`
- ✅ Build configurado en `package.json`

### 2. Deployment en Vercel

#### Opción A: Deployment Automático (Recomendado)

1. **Ve a Vercel**
   - Visita: https://vercel.com
   - Inicia sesión con tu cuenta de GitHub

2. **Importa el Proyecto**
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio: `GabrielAcu/Portfolio`
   - Click en "Import"

3. **Configuración Automática**
   - Vercel detectará automáticamente que es un proyecto Vite
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click en "Deploy"
   - Espera 1-2 minutos
   - ¡Tu portfolio estará en vivo! 🎉

#### Opción B: Deployment Manual con CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deployar
vercel

# Para producción
vercel --prod
```

### 3. Configuración del Dominio

Después del deployment, Vercel te dará una URL como:
- `https://portfolio-gabrielacu.vercel.app`

Puedes:
- Usar esta URL directamente
- Configurar un dominio personalizado en Settings → Domains

### 4. Actualizaciones Futuras

Cada vez que hagas `git push` a la rama `main`, Vercel automáticamente:
- Detectará el cambio
- Hará un nuevo build
- Deployará la nueva versión

### 5. Crear Rama para Experimentos

Para trabajar en cambios sin afectar la versión en producción:

```bash
# Crear nueva rama
git checkout -b experimentos

# Hacer cambios...
# Commit cambios
git add .
git commit -m "Descripción de cambios"

# Subir rama
git push -u origin experimentos

# Cuando estés listo, mergear a main
git checkout main
git merge experimentos
git push
```

### 6. Variables de Entorno (Si las necesitas)

Si en el futuro necesitas variables de entorno:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias
4. Redeploy

## ✅ Checklist Pre-Deployment

- [x] Código en GitHub
- [x] `.gitignore` configurado
- [x] `package.json` con scripts correctos
- [x] Build funciona localmente (`npm run build`)
- [ ] Personalizar información (nombre, links, proyectos)
- [ ] Probar en Vercel

## 🎯 Próximos Pasos Recomendados

1. **Personaliza tu información**
   - Actualiza links de GitHub, LinkedIn, Email
   - Agrega tus proyectos reales
   - Personaliza la biografía

2. **Deploy a Vercel**
   - Sigue los pasos de arriba
   - Verifica que todo funcione

3. **Comparte tu portfolio**
   - Agrega el link a tu CV
   - Compártelo en LinkedIn
   - Úsalo en tus postulaciones

## 📝 Comandos Útiles

```bash
# Ver estado de Git
git status

# Ver ramas
git branch

# Cambiar de rama
git checkout nombre-rama

# Ver commits
git log --oneline

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Ver diferencias
git diff
```

## 🆘 Solución de Problemas

### Build falla en Vercel
- Verifica que `npm run build` funcione localmente
- Revisa los logs en Vercel Dashboard
- Asegúrate que todas las dependencias estén en `package.json`

### Página en blanco después de deploy
- Verifica la consola del navegador (F12)
- Asegúrate que las rutas sean correctas
- Revisa que no haya errores de importación

### Cambios no se reflejan
- Espera 1-2 minutos después del push
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica que el commit se haya pusheado correctamente

---

**¡Tu portfolio está listo para impresionar! 🚀✨**
