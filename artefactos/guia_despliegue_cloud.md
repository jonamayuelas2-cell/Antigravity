# ☁️ Guía: Despliegue de tu Ecosistema PWA en la Nube 🚀

Si has subido tu "Hub" a Vercel o Netlify, habrás notado que los enlaces a tus proyectos (Roma, Mexicano) no funcionan. ¡Es normal! Siguen apuntando a `localhost`. Aquí tienes cómo arreglarlo. ✨

---

## 1. Despliegue Individual 📦
Vercel o Netlify no saben que tus carpetas `../Roma` existen fuera del repositorio del Hub. Para que todo funcione:
1. Sube el proyecto **Roma** a su propio repositorio de GitHub y despliégalo en Vercel.
2. Sube el proyecto **RestauranteMexicano** a su propio repositorio y despliégalo en Vercel.
3. Anota las URLs que te den (ej. `https://roma-pwa.vercel.app`).

## 2. Configura las URLs en el Hub 🛠️
He actualizado tu archivo `app.js` con una lógica inteligente. Ahora solo tienes que poner tus URLs reales ahí:

```javascript
// En app.js busca esta sección:
const PROJECT_CONFIG = {
  // ...
  projects: {
    roma: {
      // ...
      prod: 'PON_AQUI_LA_URL_DE_ROMA_DE_VERCEL' 
    },
    mexico: {
      // ...
      prod: 'PON_AQUI_LA_URL_DE_MEXICANO_DE_VERCEL'
    }
  }
};
```

## 3. ¿Cómo funciona esta magia? 🪄
El script detecta automáticamente dónde estás:
*   **Si estás en tu PC (`localhost`):** Los enlaces seguirán apuntando a los puertos `8080` y `8082` para que puedas seguir desarrollando cómodamente. ✅
*   **Si estás en Vercel/Netlify:** El script cambiará los enlaces a las URLs de producción que hayas configurado. ¡Automático! 🌍✨

## 4. Beneficios del Cloud 🌈
*   **HTTPS automático:** ¡Tus PWA se podrán instalar en cualquier móvil! 📲
*   **Portfolio real:** Puedes pasarle el enlace del Hub a cualquiera y podrá navegar por todos tus proyectos.

---

### Pasos a seguir ahora:
1. Crea los proyectos en Vercel para Roma y Mexicano.
2. Copia las URLs.
3. Edita `app.js` con esas URLs.
4. Haz un `git push` del Hub. 🚀🔥
