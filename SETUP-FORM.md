# Configuración del Sistema de Formularios GitHub Issues

Este sistema permite recibir formularios de contacto de forma segura usando GitHub Issues y Actions.

## 🔧 Configuración Requerida

### 1. Crear GitHub Personal Access Token

1. Ve a **GitHub Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Nombre: `TuxedoTrack Contact Form`
4. Scopes necesarios:
   - `repo` (full control of private repositories)
   - `public_repo` (access to public repositories)
5. Copia el token generado

### 2. Configurar Variables en JavaScript

Edita `assets/js/main.js` y reemplaza:

```javascript
const GITHUB_OWNER = 'YOUR_GITHUB_USERNAME'; // Tu username de GitHub
const GITHUB_REPO = 'YOUR_REPO_NAME';        // Nombre de tu repositorio
const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN';    // Token que creaste
```

### 3. Configurar Secrets en GitHub (para notificaciones por email)

Ve a **Settings** > **Secrets and variables** > **Actions** y agrega:

```
EMAIL_USERNAME = tu-email@gmail.com
EMAIL_PASSWORD = tu-app-password-de-gmail
NOTIFICATION_EMAIL = donde-quieres-recibir-notificaciones@gmail.com
```

#### Para Gmail App Password:
1. Ve a **Google Account** > **Security** > **2-Step Verification**
2. Click **App passwords**
3. Genera una contraseña para "Mail"
4. Usa esa contraseña en `EMAIL_PASSWORD`

## 🚀 Cómo Funciona

1. **Usuario llena formulario** → JavaScript valida datos
2. **JavaScript envía datos** → GitHub Issues API crea issue
3. **GitHub Action se dispara** → envía email de notificación
4. **Recibes email** con todos los detalles del contacto

## ✅ Ventajas de este Sistema

- **100% Gratuito** con GitHub Free
- **Totalmente seguro** - todo bajo tu control
- **Auditable** - logs completos en GitHub
- **Respaldo automático** - GitHub guarda todo
- **Sin servicios externos** - no depende de terceros

## 🔒 Seguridad

- Token con permisos mínimos necesarios
- HTTPS end-to-end
- Datos almacenados en tu repositorio
- Logs auditables
- Sin servicios de terceros

## 📝 Personalización

Puedes modificar:
- Labels de los issues
- Template del email
- Campos del formulario
- Validaciones adicionales
- Automatizaciones extra

## ⚠️ Notas Importantes

1. **No expongas el token** en el código público
2. **Usa App Passwords** para Gmail, no tu contraseña real
3. **Los issues serán públicos** si el repo es público
4. **Revisa los rate limits** de GitHub API (5000 req/hour)

## 🧪 Testing

Para probar sin email:
1. Comenta la sección de email en el workflow
2. Solo se crearán issues
3. Verifica que funcione antes de activar emails
