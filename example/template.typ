#let matrikelnummer = "657639"
#let semester = "SoSe 2026"
#let hausaufgabe(
  kurs,
  blatt_titel,
  institut,
  content,
) = {
  set text(font: "New Computer Modern", ligatures: true)
  set document(title: blatt_titel)
  align(center, [
    #title() \
    #kurs -- #semester \
    #institut \
    Liam Stedman \
    Matrikelnummer: #matrikelnummer
  ])

  content
}

#let aufgabe(title, content) = {
  heading(level: 1, title)
  content
}
