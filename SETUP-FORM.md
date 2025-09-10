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

**Opción A: Archivo de configuración (Recomendado)**
1. Copia `assets/js/config.example.js` a `assets/js/config.js`
2. Edita `config.js` y actualiza tu token:

```javascript
window.TuxedoConfig = {
    github: {
        owner: 'ignazer',
        repo: 'TuxedoTrack',
        token: 'ghp_tu_token_aqui' // Token que creaste
    }
};
```

**Opción B: Editar directamente (Menos seguro)**
Edita `assets/js/main.js` y reemplaza `YOUR_GITHUB_TOKEN` con tu token real.

### 3. Configurar Secrets en GitHub (para notificaciones por email)

Ve a **Settings** > **Secrets and variables** > **Actions** y agrega:

```
EMAIL_USERNAME = tuxedotrack@proton.me
EMAIL_PASSWORD = tu-app-password-de-protonmail
NOTIFICATION_EMAIL = tuxedotrack@proton.me
```

#### Para ProtonMail Bridge (recomendado):
1. Descarga **ProtonMail Bridge** (para SMTP)
2. Configura Bridge en tu sistema
3. Usa las credenciales que Bridge te proporciona
4. Alternativamente, usa `smtp.protonmail.com` directamente

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
