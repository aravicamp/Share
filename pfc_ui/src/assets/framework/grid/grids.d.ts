interface Grids {
  OnSave();
  OnChange();
  OnReady();
}

interface Grid {
  Reload(data:any);
}

declare var Grids: Grids;
