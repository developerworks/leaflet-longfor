## Leaftlet OSM Buildings 龙湖北城天街示例

OSM Buildings 是一个OpenStreetMaps建筑几何体的可视化库.

![龙湖北城天街OSM Buildings](http://developerworks.github.io/assets/leafletjs/412EEDB9-268F-4D6A-9243-845A632F9A80.png)

- 从 `0.2.2` 开始如下方法名称被重命名

    ```
    loadData() -> load()
    setData() -> set()
    setStyle() -> style()
    setDate() -> date()
    ```

- 与Leaflet集成

    ```
    <head>
      <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css">
      <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
      <script src="OSMBuildings-Leaflet.js"></script>
    </head>
    ```

- 初始化地图引擎并添加地图Tile层

    ```
    // 瓦片模板
    new L.TileLayer(
      'http://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png',{
        attribution: 'Map tiles &copy; <a href="http://mapbox.com">MapBox</a>',
        maxNativeZoom: 19,
        maxZoom: 21
      }
    ).addTo(map);
    ```

- 设置GeoJSON数据

    ```
    // ==========
    // GeoJSON层
    // ==========
    var geojsonLayer = L.geoJson([longforGeojsonFeature], {
      style: function (feature) {
        return feature.properties && feature.properties.style;
      },
      onEachFeature: function (feature, layer) {
        console.log(feature);
        layer.bindPopup(feature.properties.name);
      }
    }).addTo(map);
    ```

- 集成OSM Buildings显示3D建筑物:

    ```
    // ============================
    // 集成OSM Buildings显示3D建筑物
    // ============================
    // 加载数据
    var osmb = new OSMBuildings(map)
      .date(new Date(2014, 10, 8, 8, 0))
      .load()
      .click(function (e) {
        console.log('feature clicked:', e);
        osmb.getDetails(e.feature, function (json) {
          console.log(json.features[0].properties.tags);
          var popup = L.popup()
            .setLatLng([29.58170544840436, 106.53061509132385])
            .setContent(
                '<h3 style="margin: 5px 0">' +
                json.features[0].properties.tags.name + '</h3>' + '<br/>' +
                json.features[0].properties.tags.description
            )
            .openOn(map);
        });
      });
    // 加载层切换器
    L.control.layers({}, { Buildings: osmb }).addTo(map);
    ```

## 完整项目代码

```
git clone https://github.com/developerworks/leaflet-longfor.git
cd leaflet-longfor
bower install
npm install
# 启动Web服务器
python -m SimpleHTTPServer 8888 # Python 2.7
python -m http.server 8888      # Python 3
# 浏览器地址栏
http://localhost:8888/examples
```

## 参考资料

1. Leafletjs API参考手册
http://leafletjs.com/reference.html

2. OSM Buidling Github项目地址
https://github.com/kekscom/osmbuildings

3. Leaflet 集成 OSM Buildings 显示 3D 建筑物
http://www.cuitu.net/content/leaflet-ji-cheng-osm-buildings-xian-shi-3d-jian-zhu-wu