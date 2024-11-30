import { NextResponse } from 'next/server';
import { findScriptByCompany } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const companyName = searchParams.get('name')?.replace(/"/g, '');

  if (!companyName) {
    return NextResponse.json(
      { error: 'Company name is required' },
      { status: 400 }
    );
  }

  const script = findScriptByCompany(companyName);

  if (!script) {
    return NextResponse.json(
      { error: 'Company not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ script });
}