import { describe, it, expect } from "vitest";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const RAIZ = process.cwd();
const ESTE_ARQUIVO = join("src", "test", "marca.test.ts");

function listar(dir: string, extensoes: string[]): string[] {
  const saida: string[] = [];
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    const rel = relative(RAIZ, caminho);
    if (nome === "node_modules" || rel === join("src", "components", "ui")) continue;
    if (statSync(caminho).isDirectory()) saida.push(...listar(caminho, extensoes));
    else if (extensoes.some((e) => nome.endsWith(e))) saida.push(caminho);
  }
  return saida;
}

const ler = (caminho: string) => readFileSync(caminho, "utf-8");
const rel = (caminho: string) => relative(RAIZ, caminho).split(sep).join("/");

const codigoAtivo = () =>
  listar(join(RAIZ, "src"), [".ts", ".tsx"]).filter((f) => rel(f) !== ESTE_ARQUIVO.split(sep).join("/"));

const textoVisivel = () => [
  ...listar(join(RAIZ, "src", "components", "sections"), [".tsx"]),
  join(RAIZ, "src", "components", "Header.tsx"),
  ...listar(join(RAIZ, "src", "pages"), [".tsx"]),
  join(RAIZ, "index.html"),
];

describe("marca Analytics", () => {
  it("nenhum arquivo ativo cita Analytics", () => {
    const alvos = [...codigoAtivo(), join(RAIZ, "index.html")];
    const achados = alvos.filter((f) => /analytics/i.test(ler(f))).map(rel);
    expect(achados).toEqual([]);
  });

  it("nenhum logo da Analytics em assets", () => {
    const logos = readdirSync(join(RAIZ, "src", "assets", "logos"));
    expect(logos.filter((n) => /analytics/i.test(n))).toEqual([]);
  });

  it("seções sem uso foram removidas", () => {
    const mortas = ["ProblemSection", "BrandsSection", "ImpactSection", "ClientsSection"];
    const restantes = mortas.filter((n) =>
      existsSync(join(RAIZ, "src", "components", "sections", `${n}.tsx`)),
    );
    expect(restantes).toEqual([]);
  });
});

describe("contagem de soluções", () => {
  const secoes = join(RAIZ, "src", "components", "sections");

  it("Hero e Ecossistema falam em 4 soluções", () => {
    expect(ler(join(secoes, "HeroSection.tsx"))).toContain("4 soluções");
    expect(ler(join(secoes, "EcosystemSection.tsx"))).toContain("4 soluções");
  });

  it("nenhum texto visível fala em 5 ou cinco soluções", () => {
    const achados = textoVisivel()
      .filter((f) => /(\b5|cinco)\s+solu[çc][õo]es/i.test(ler(f)))
      .map(rel);
    expect(achados).toEqual([]);
  });

  it("Ecossistema não depende de 5 itens", () => {
    const texto = ler(join(secoes, "EcosystemSection.tsx"));
    expect(texto).toContain("satellites.length");
    expect(texto).not.toMatch(/(\b5\s*(itens|satélites|marcas)|length\s*[=<>!]=*\s*5|\[4\])/);
  });
});

describe("copy", () => {
  it("sem travessões em texto visível", () => {
    const achados = textoVisivel()
      .filter((f) => /[—–]/.test(ler(f)))
      .map(rel);
    expect(achados).toEqual([]);
  });

  it("sem emojis em texto visível", () => {
    const achados = textoVisivel()
      .filter((f) => /(?![©®™])\p{Extended_Pictographic}/u.test(ler(f)))
      .map(rel);
    expect(achados).toEqual([]);
  });
});
