const songs = [
  {
    title: 'Un siglo sin ti',
    singer: '670547bee631babadd8695eb',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://youtu.be/KYZlT2iYRh8?si=C1QDrzB46ZALRTqY',
    listPosition: 1
  },
  {
    title: 'Si antes te hubiera conocido',
    singer: '670547bee631babadd8695ec',
    album: 'Sencillo',
    category: 'urbano',
    video: 'https://youtu.be/MgsdDfdGdHc?si=uTEh9_ITP25zmtbn',
    listPosition: 2
  },
  {
    title: 'Carita triste',
    singer: '670547bee631babadd8695ed',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo3',
    listPosition: 3
  },
  {
    title: 'Perdonarte, ¿para qué?',
    singer: '670547bee631babadd8695ee',
    album: 'Sencillo',
    category: 'cumbia',
    video: 'https://www.youtube.com/watch?v=Ejemplo4',
    listPosition: 4
  },
  {
    title: 'El Merengue',
    singer: '670547bee631babadd8695ef',
    album: 'Sencillo',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo5',
    listPosition: 5
  },
  {
    title: 'Mienteme',
    singer: '670547bee631babadd8695f0',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo6',
    listPosition: 6
  },
  {
    title: 'La Bebe',
    singer: '670547bee631babadd8695f1',
    album: 'Sencillo',
    category: 'urbano',
    video: 'https://www.youtube.com/watch?v=Ejemplo7',
    listPosition: 7
  },
  {
    title: 'Enemigos',
    singer: '670547bee631babadd8695f2',
    album: 'Sencillo',
    category: 'urbano',
    video: 'https://www.youtube.com/watch?v=Ejemplo8',
    listPosition: 8
  },
  {
    title: 'Sigo Adelante',
    singer: '670547bee631babadd8695f3',
    album: 'Sencillo',
    category: 'trap',
    video: 'https://www.youtube.com/watch?v=Ejemplo9',
    listPosition: 9
  },
  {
    title: 'Deja Vu',
    singer: '670547bee631babadd8695f4',
    album: 'TINI',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo10',
    listPosition: 10
  },
  {
    title: 'Baila esta Cumbia',
    singer: '670547bee631babadd8695f5',
    album: 'Sencillo',
    category: 'cumbia',
    video: 'https://www.youtube.com/watch?v=Ejemplo11',
    listPosition: 11
  },
  {
    title: 'Por Siempre',
    singer: '670547bee631babadd8695f6',
    album: 'Sencillo',
    category: 'urbano',
    video: 'https://www.youtube.com/watch?v=Ejemplo12',
    listPosition: 12
  },
  {
    title: 'Suerte',
    singer: '670547bee631babadd8695f7',
    album: 'Sencillo',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo13',
    listPosition: 13
  },
  {
    title: 'Llamado de emergencia',
    singer: '670547bee631babadd8695f8',
    album: 'Talento de Barrio',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo14',
    listPosition: 14
  },
  {
    title: 'Te quiero',
    singer: '670547bee631babadd8695f9',
    album: 'Vivir',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo15',
    listPosition: 15
  },
  {
    title: 'Héroe',
    singer: '670547bee631babadd8695fa',
    album: 'Escape',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo16',
    listPosition: 16
  },
  {
    title: 'Que me sigan los demás',
    singer: '670547bee631babadd8695f3',
    album: 'Sencillo',
    category: 'trap',
    video: 'https://www.youtube.com/watch?v=Ejemplo17',
    listPosition: 17
  },
  {
    title: 'Despacito',
    singer: '670547bee631babadd8695fb',
    album: 'Vida',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo18',
    listPosition: 18
  },
  {
    title: 'Nunca es tarde',
    singer: '670547bee631babadd8695fc',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo19',
    listPosition: 19
  },
  {
    title: 'Volverte a ver',
    singer: '670547bee631babadd8695fd',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo20',
    listPosition: 20
  },
  {
    title: 'Un día',
    singer: '670547bee631babadd8695f7',
    album: 'Sencillo',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo21',
    listPosition: 21
  },
  {
    title: 'Deja que vuelva',
    singer: '670547bee631babadd8695fe',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo22',
    listPosition: 22
  },
  {
    title: 'Perdóname',
    singer: '670547bee631babadd8695fe',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo23',
    listPosition: 23
  },
  {
    title: 'Beso',
    singer: '670547bee631babadd8695f1',
    album: 'Sencillo',
    category: 'urbano',
    video: 'https://www.youtube.com/watch?v=Ejemplo24',
    listPosition: 24
  },
  {
    title: 'Cuando te vuelvas a enamorar',
    singer: '6705518f081447b9f7c254ed',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo25',
    listPosition: 25
  },
  {
    title: 'Bailando',
    singer: '670547bee631babadd8695fa',
    album: 'Sex and Love',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo26',
    listPosition: 26
  },
  {
    title: 'Señorita',
    singer: '670551f8d39f4c89a502a9b2',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo27',
    listPosition: 27
  },
  {
    title: 'Te recuerdo',
    singer: '670547bee631babadd869601',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo28',
    listPosition: 28
  },
  {
    title: 'Ya no quiero',
    singer: '670547bee631babadd8695f3',
    album: 'Sencillo',
    category: 'trap',
    video: 'https://www.youtube.com/watch?v=Ejemplo29',
    listPosition: 29
  },
  {
    title: 'Luna',
    singer: '670547bee631babadd8695ff',
    album: 'Sencillo',
    category: 'urbano',
    video: 'https://www.youtube.com/watch?v=Ejemplo30',
    listPosition: 30
  },
  {
    title: 'Corazón',
    singer: '670547bee631babadd869600',
    album: 'F.A.M.E.',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo31',
    listPosition: 31
  },
  {
    title: 'Ahora o nunca',
    singer: '670547bee631babadd8695f4',
    album: 'TINI',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo32',
    listPosition: 32
  },
  {
    title: 'La cumbia de los Trapos',
    singer: '670547bee631babadd8695f5',
    album: 'Sencillo',
    category: 'cumbia',
    video: 'https://www.youtube.com/watch?v=Ejemplo33',
    listPosition: 33
  },
  {
    title: 'Con altura',
    singer: '670554761f12653379232ac5',
    album: 'Sencillo',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo34',
    listPosition: 34
  },
  {
    title: 'Sálvame',
    singer: '670554a81f12653379232ac7',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo35',
    listPosition: 35
  },
  {
    title: 'Una noche',
    singer: '670554e01f12653379232ac9',
    album: 'Sencillo',
    category: 'urbano',
    video: 'https://www.youtube.com/watch?v=Ejemplo36',
    listPosition: 36
  },
  {
    title: 'No te vayas',
    singer: '670547bee631babadd8695fe',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo37',
    listPosition: 37
  },
  {
    title: 'Dákiti',
    singer: '6705551c1f12653379232acb',
    album: 'Sencillo',
    category: 'reggaetón',
    video: 'https://www.youtube.com/watch?v=Ejemplo38',
    listPosition: 38
  },
  {
    title: 'Chica ideal',
    singer: '670547bee631babadd8695fc',
    album: 'Sencillo',
    category: 'pop',
    video: 'https://www.youtube.com/watch?v=Ejemplo39',
    listPosition: 39
  },
  {
    title: '150 canciones',
    singer: '6705554e1f12653379232acd',
    album: 'Casanova',
    category: 'rap',
    video: 'https://www.youtube.com/watch?v=Ejemplo40',
    listPosition: 40
  }
]
module.exports = songs
