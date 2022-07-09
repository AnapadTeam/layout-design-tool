// parameters
let margin = 10
let radius
let spread = 1
let topHeight = 0.5

// state
let rowCount = 0

let run = () => {
  makeLayout()
  writeInfo()
}

let writeInfo = () => {
  let r5 = document.getElementById('r2')
  let rowHeight = parseFloat(getComputedStyle(r5).height).toFixed(2)
  measurement('Top Row Height', topHeight*100 + '%')
  measurement('Row Height', rowHeight + 'px')
  measurement('Spread', spread)
  measurement('Radius', (radius/rowHeight*100).toFixed() + '%')
  measurement('Margin', margin + 'px')
  measurement('BOE NV126B5M-N42', '1920&thinsp;×&thinsp;515')
  info.lastElementChild.id = 'meas-display'
}

let measurement = (param, value) => {
  let meas = document.createElement('div')
  meas.className = 'meas'

  let label = document.createElement('p')
  label.className = 'label'
  label.innerHTML = param

  let data = document.createElement('p')
  data.innerHTML = value

  meas.append(label)
  meas.append(data)

  info.append(meas)
}

let makeLayout = () => {
  let z = (515 - 6*margin)*((topHeight/(4 + topHeight)))
  let y = (515 - 6*margin)*((4/(4 + topHeight)))/4 // baseline row height
  let x = y*spread           // baseline key width

  // corner rounding
  radius = 0.15*y

  // derivations
  xTab = 1.5*x
  xRet = (13*(x + margin) + xTab - (11*x + 12*margin))/2
  xShf = (13*(x + margin) + xTab - (10*x + 11*margin))/2
  xCmd = (13*(x + margin) + xTab - (12*x + 13*margin))/2
  xSpc = 5*x + 4*margin

  // rows
  row(z)
  for (let i = 0; i < 4; i++)
    row(y)
  
  // r1
  for (let i = 0; i < 13; i++)
    key(x, z, 1)
  key(xTab, z, 1)
  
  // r2
  key(xTab, y, 2)
  for (let i = 0; i < 13; i++)
    key(x, y, 2)
  
  // r3
  key(xRet, y, 3)
  for (let i = 0; i < 11; i++)
    key(x, y, 3)
  key(xRet, y, 3)

  // r4
  key(xShf, y, 4)
  for (let i = 0; i < 10; i++)
    key(x, y, 4)
  key(xShf, y, 4)

  // r5
  for (let i = 0; i < 3; i++)
    key(x, y, 5)
  key(xCmd, y, 5)
  key(xSpc, y, 5)
  key(xCmd, y, 5)
  for (let i = 0; i < 2; i++)
    key(x, y, 5)
  keyVertArrows(x, y, 5)
  key(x, y, 5)
}

let row = (height) => {
  rowCount++

  let r = document.createElement('div')
  r.className = 'row'
  r.id = 'r' + rowCount
  r.style.width = 'calc(100% - 2*' + margin + 'px)'
  r.style.height = height + 'px'
  r.style.margin = margin + 'px 0 0 ' + margin + 'px'

  let d = document.getElementById('display')
  d.append(r)
}

let key = (width, height, rowIdx) => {
  let k = document.createElement('div')
  k.className = 'key'
  k.style.width = width + 'px'
  k.style.height = height + 'px'
  k.style.borderRadius = radius + 'px'
  k.style.marginRight = margin + 'px'

  let r = document.getElementById('r' + rowIdx)
  r.append(k)
}

let keyVertArrows = (width, height, rowIdx) => {
  let k = document.createElement('div')
  k.style.display = 'inline-block'
  k.style.marginRight = margin + 'px'
  k.style.borderRadius = radius + 'px'

  let up = document.createElement('div')
  up.className = 'key'
  up.style.display = 'block'
  up.style.width = width + 'px'
  up.style.height = (height - 2*margin/3)/2 + 'px'
  up.style.borderRadius = radius + 'px ' + radius + 'px ' + radius/2 + 'px ' + radius/2 + 'px'

  let sp = document.createElement('div')
  sp.style.display = 'block'
  up.style.width = width + 'px'
  sp.style.height = 2*margin/3 + 'px'

  let dn = up.cloneNode()
  dn.style.borderRadius = radius/2 + 'px ' + radius/2 + 'px ' + radius + 'px ' + radius + 'px'

  k.append(up)
  k.append(sp)
  k.append(dn)

  let r = document.getElementById('r' + rowIdx)
  r.append(k)
}
