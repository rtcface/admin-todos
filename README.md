# Development

Pasos para lenvatar la app en desarrollo

1. Levantar la base de datos

    ```bash
    docker compose up -d
    ```

2. Renombrar el archivo .env.template.
3. Remplazar las variables de entorno.
4. Ejecutar el comando.

    ```bash
    npm install
    ```

5. Ejecutar el comando.

     ```bash
     npm run dev 
     ```

6. Ejecutar comandos prisma.

    ```bash
    npx prisma init
    npx prisma migrate dev
    npx prisma generate
    ```

7. Ejecutar el SEED para [llenar la base de datos local](localhost:3000/api/seed)

## Prisma commans

```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```
