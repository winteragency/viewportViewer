(function() {
  var viewportViewer;

  var getWidth = function() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  };

  var getHeight = function() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  var updateViewportViewer = function() {
    viewportViewer.innerHTML = 'Width: ' + getWidth() + '<br>Height: ' + getHeight();
  };

  var initViewportViewer = function() {
    viewportViewer = document.createElement('div');
    viewportViewer.id = 'viewportviewer';
    viewportViewer.title = 'Click me and I will disappear!';

    viewportViewer.addEventListener('click', function(){
      document.body.removeChild(viewportViewer);
    });

    document.body.appendChild(viewportViewer);

    updateViewportViewer();

    window.addEventListener('resize', function(){
      updateViewportViewer();
    });
  };

  initViewportViewer();
})();
