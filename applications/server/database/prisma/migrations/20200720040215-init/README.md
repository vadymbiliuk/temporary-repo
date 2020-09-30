# Migration `20200720040215-init`

This migration has been generated at 7/20/2020, 4:02:15 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MODERATOR', 'USER', 'STREAMER');

CREATE TABLE "public"."users" (
"created_at" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"email" text  NOT NULL ,
"id" text  NOT NULL ,
"name" text  NOT NULL ,
"password" text  NOT NULL ,
"role" "Role" NOT NULL DEFAULT E'USER',
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "users.email" ON "public"."users"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200720040215-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+enum Role {
+  ADMIN
+  MODERATOR
+  USER
+  STREAMER
+}
+
+model User {
+  id        String   @id @default(uuid())
+  role      Role     @default(USER)
+  createdAt DateTime @default(now()) @map(name: "created_at")
+  email     String   @unique
+  name      String
+  password  String
+
+
+  @@map(name: "users")
+}
```
