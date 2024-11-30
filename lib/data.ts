export const companyScripts = [
  {
    name: 'candlefish',
    script: 'https://widget.molin.ai/shop-ai.js?w=0tjvxtiq',
  },
  {
    name: 'swashaa',
    script: 'https://widget.molin.ai/shop-ai.js?w=uzk60dbd',
  },
];

export function findScriptByCompany(companyName: string): string | null {
  const company = companyScripts.find((c) => c.name === companyName);
  return company?.script || null;
}
