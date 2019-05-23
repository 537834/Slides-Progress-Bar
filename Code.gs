function progressBar() {
  var slides = SlidesApp.getActivePresentation().getSlides()
  for (var i = 0;i<slides.length;++i){
    for (var j = 0;j<slides.length;++j){
  slides[i].insertShape(SlidesApp.ShapeType.ELLIPSE, 10*j+3, 392, 9, 9)
  if (j<=i){
    var shapes=slides[i].getShapes();
    var lastshape = shapes[shapes.length-1];
    lastshape.getFill().setSolidFill(58, 113, 201)
  }
    }
  }
}
