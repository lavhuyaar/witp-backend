-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" CHAR(30) NOT NULL,
    "timeTook" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" TEXT NOT NULL,
    "name" CHAR(50) NOT NULL,
    "image" TEXT NOT NULL,
    "PositionXLeft" INTEGER NOT NULL,
    "PositionXRight" INTEGER NOT NULL,
    "PositionYTop" INTEGER NOT NULL,
    "PositionYBottom" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");
