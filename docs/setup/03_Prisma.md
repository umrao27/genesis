Install Prisma

schema.prisma

Migration

Generate

Studio

Commands

# Create/apply a migration (also regenerates the client)

npx prisma migrate dev --name <migration_name>

# Regenerate the client manually

npx prisma generate

# Open the database in a browser

npx prisma studio

# Reset the database during development

npx prisma migrate reset
