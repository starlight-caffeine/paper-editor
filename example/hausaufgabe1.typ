#import "template.typ": aufgabe, hausaufgabe
#import "@preview/phonokit:0.5.7": *
// #phonokit-init(fonai "New Computer Modern")

#show: hausaufgabe.with(
  [GK Linguistik bei Dr. Machicao y Priemer],
  [Hausaufgabenblatt 2],
  [Institut für deutsche Sprache und Linguistik],
)

#let ortho(it) = {
  sym.chevron.l
  sym.space
  it
  sym.space
  sym.chevron.r
}

= Aufgabe 1
/ a: #ortho[arbeiten] [#ipa("'Qa:K. b \\t ai. t \\v n")] \
/ b: #ortho[Giebel] [#ipa("'gi:.b \\v l") ] \
/ c: #ortho[sagen] [#ipa("'za: .g \\v n") ] \
/ d: #ortho[fröhlich] [#ipa("'fr \\o :. lIC") ] \
/ e: #ortho[Enge] [#ipa("'QEN@")] \
/ f: #ortho[Dampfschiff] [#ipa("'dam \\t pf.,SIf") ]

= Aufgabe 2
/ a: [#ipa("p")] \
/ b: [#ipa("i:")] \
/ c: [#ipa("x")] \
/ d: [#ipa("Q")] \
/ e: [#ipa("I")] \
/ f: [#ipa("Z")] \
/ g: [#ipa("5")] \
/ h: [#ipa("o:")] \
/ i: [#ipa("\\t ts")] \
/ j: [#ipa("@")]

= Aufgabe 3
/ a: Vorderer hoher gerundeter gespannter Vokal
/ b: Stimmloser velarer Frikativ
/ c: Vorderer obermittelhoher gerundeter gespannter Vokal
/ d: Stimmhafter postalveolarer Frikativ
/ e: Stimmloser alveolarer Plosiv
/ f: Vorderer untermittelhoher ungerundeter ungespannter Vokal
/ g: Stimmhafter Bilabialer Nasal
/ h: Hinterer untermittelhoher gerundeter ungespannter Vokal
