require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./images/omrs-radar.png')

const GoogleSheetInput = require('./util/factory')

GoogleSheetInput().build()
