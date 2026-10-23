import { auth } from "@/auth"
import { NextResponse } from "next/server"

export const proxy = auth((req) =>