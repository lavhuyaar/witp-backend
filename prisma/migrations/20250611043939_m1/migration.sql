-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" CHAR(30) NOT NULL,
    "timeTook" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" TEXT NOT NULL,
    "name" CHAR(50) NOT NULL,
    "image" TEXT NOT NULL,
    "PositionXLeft" TEXT NOT NULL,
    "PositionXRight" TEXT NOT NULL,
    "PositionYTop" TEXT NOT NULL,
    "PositionYBottom" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");
