import { TileLayer, MapContainer } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import img from "./placeholder.png";
import L from "leaflet";

const customMarkerIcon = L.icon({
  iconUrl: img,
  iconSize: [28, 30],
  iconAnchor: [12.5, 41]
});

let heatmapData = [
  [-37.8839, 175.3745188667, "571"],
  [-37.8869090667, 175.3657417333, "486"],
  [-37.8894207167, 175.4015351167, "807"],
  [-37.8927369333, 175.4087452333, "899"],
  [-37.90585105, 175.4453463833, "1273"],
  [-37.9064188833, 175.4441556833, "1258"],
  [-37.90584715, 175.4463564333, "1279"],
  [-37.9033391333, 175.4244005667, "1078"],
  [-37.9061991333, 175.4492620333, "1309"],
  [-37.9058955167, 175.4445613167, "1261"],
  [-37.88888045, 175.39146475, "734"],
  [-37.8950811333, 175.41079175, "928"],
  [-37.88909235, 175.3922956333, "740"],
  [-37.8889259667, 175.3938591667, "759"],
  [-37.8876576333, 175.3859563833, "687"],
  [-37.89027155, 175.3973178833, "778"],
  [-37.8864473667, 175.3806136833, "631"],
  [-37.9000262833, 175.4183242167, "1012"],
  [-37.90036495, 175.4189457, "1024"],
  [-37.9000976833, 175.4197312167, "1027"],
  [-37.90239975, 175.42371165, "1067"],
  [-37.9043379667, 175.42430325, "1080"],
  [-37.9026441, 175.4231055167, "1068"],
  [-37.8883536333, 175.3888573833, "718"],
  [-37.9029948833, 175.4237386167, "1070"],
  [-37.89824135, 175.4150421667, "982"],
  [-37.8976067833, 175.41510265, "983"],
  [-37.9023491333, 175.4225495, "1066"],
  [-37.8856157167, 175.3775632833, "608"],
  [-37.8963032667, 175.4132068, "951"],
  [-37.8922813667, 175.4073402333, "1/898"],
  [-37.88933345, 175.3956084333, "769"],
  [-37.8936148833, 175.4090577, "906"],
  [-37.8939398, 175.4094444833, "914"],
  [-37.8857355333, 175.3722297667, "542"],
  [-37.8931092167, 175.4083014, "898"],
  [-37.9008253167, 175.4198128, "1030"],
  [-37.9045052333, 175.4260735, "1100"],
  [-37.9053927167, 175.42822265, "1130"],
  [-37.90507935, 175.4313065, "1147"],
  [-37.9055749667, 175.4319092167, "1154"],
  [-37.9039034833, 175.4274736667, "1/1105"],
  [-37.9037633, 175.4261181833, "1093"],
  [-37.9038755, 175.42871045, "3/1105"],
  [-37.90369555, 175.4285285, "2/1105"],
  [-37.9056626, 175.4341078833, "1170"],
  [-37.9018736833, 175.438852, "1/1213"],
  [-37.9057596167, 175.4356650167, "1180"],
  [-37.9053502, 175.4361049333, "1185"],
  [-37.9053379167, 175.4366986167, "1195"],
  [-37.9058892333, 175.4381450333, "1204"],
  [-37.9060264167, 175.4400763167, "1220"],
  [-37.9056766833, 175.4412592, "1233"],
  [-37.9057312167, 175.4418380333, "1235"],
  [-37.9061575833, 175.4421068667, "1242"],
  [-37.9063946167, 175.4438004667, "1256"],
  [-37.8996027667, 175.43995055, "4/1215"],
  [-37.9006449667, 175.4395556833, "3/1215"],
  [-37.9009138167, 175.4394061333, "2/1215"],
  [-37.9034547, 175.4396315, "1219"],
  [-37.9055243, 175.4396033, "1221"],
  [-37.89952325, 175.4406619167, "5/1215"],
  [-37.90561525, 175.4404853167, "1225"],
  [-37.9045602333, 175.4477690333, "1285"],
  [-37.9040051667, 175.4388491833, "1213"],
  [-37.90588145, 175.4440349167, "1257"],
  [-37.90595915, 175.4389286833, "1212"],
  [-37.9059939667, 175.4398068833, "1218"],
  [-37.8868631833, 175.37991055, "630"],
  [-37.8878744833, 175.382179, "650"],
  [-37.8880764, 175.3839845667, "670"],
  [-37.8850457333, 175.3759821, "594"],
  [-37.88446045, 175.3762872667, "587"],
  [-37.8880782667, 175.38423415, "1/670"],
  [-37.8863533833, 175.3690698667, "515"],
  [-37.8861783167, 175.3710009833, "530"],
  [-37.885424, 175.3716677833, "541"],
  [-37.88524065, 175.3722141167, "547"],
  [-37.9022371333, 175.47991035, "10"],
  [-37.9020014833, 175.4799581667, "1"],
  [-37.9020824, 175.4802630167, "2"],
  [-37.9018589833, 175.4804760833, "3"],
  [-37.9018211333, 175.4806769667, "4"],
  [-37.9021543667, 175.4805538833, "5"],
  [-37.9022658, 175.4807579333, "6"],
  [-37.9024517833, 175.4806480667, "7"],
  [-37.9024251167, 175.48041985, "8"],
  [-37.9023317833, 175.4802119667, "9"],
  [-37.9321212167, 175.4555088, "39"],
  [-37.8956185167, 175.4719458667, "4"],
  [-37.8954566, 175.4728120333, "20"],
  [-37.8957231833, 175.4727906, "22A"],
  [-37.8956085833, 175.4726702, "22"],
  [-37.8956460167, 175.4718485167, "2"],
  [-37.8953487167, 175.47202915, "5"],
  [-37.8800121167, 175.4865467167, "9"],
  [-37.8803487833, 175.48595255, "3"],
  [-37.8802064167, 175.4861004, "5"],
  [-37.8800705167, 175.4862671167, "7"],
  [-37.8798887333, 175.4863712333, "7A"],
  [-37.8801676667, 175.4866722667, "10"],
  [-37.88029245, 175.4868499667, "8"],
  [-37.8803302167, 175.4865822167, "6"],
  [-37.88038715, 175.4864004167, "4"],
  [-37.8805029333, 175.4862314167, "2"],
  [-37.9127148667, 175.4710607833, "51"],
  [-37.9118609667, 175.4668648, "20"],
  [-37.9122010667, 175.47078695, "49A"],
  [-37.91191245, 175.4682913833, "29"],
  [-37.9112774333, 175.4668027333, "17A"],
  [-37.91244995, 175.4700709833, "41"],
  [-37.9149636, 175.4772568333, "98"],
  [-37.9128421833, 175.4702103167, "42"],
  [-37.91130515, 175.4650217667, "2"],
  [-37.9140405333, 175.4754503833, "85"],
  [-37.91155815, 175.4670938833, "21"],
  [-37.9144416167, 175.4754564, "86"],
  [-37.91149715, 175.4668828667, "19"],
  [-37.9155068167, 175.4784839167, "116"],
  [-37.9135311667, 175.4736794833, "69"],
  [-37.9146717667, 175.4773664833, "103"],
  [-37.9135175667, 175.4724437333, "62"],
  [-37.9117463, 175.4676612167, "23"],
  [-37.9136108833, 175.47263915, "64"],
  [-37.9118005167, 175.46788515, "25"],
  [-37.9142630167, 175.4748833333, "80"],
  [-37.9118481833, 175.4680930167, "27"],
  [-37.91519165, 175.47727755, "100"],
  [-37.9121701, 175.4679073167, "28"],
  [-37.9152358167, 175.4780924833, "112"],
  [-37.9122425667, 175.4681859167, "30"],
  [-37.9150027167, 175.47843285, "107"],
  [-37.91196865, 175.4684916833, "31"],
  [-37.9132330333, 175.4726685333, "61"],
  [-37.9123722, 175.4685087667, "32"],
  [-37.9151754667, 175.4790262, "113"],
  [-37.9120319833, 175.46868985, "33"],
  [-37.9151328167, 175.4788729, "111"],
  [-37.9124617167, 175.4687799833, "34"],
  [-37.9150617167, 175.4786454167, "109"],
  [-37.9120926, 175.4688931667, "35"],
  [-37.9132881333, 175.47285965, "63"],
  [-37.9119984333, 175.4691844, "37A"],
  [-37.9120311, 175.4673706667, "24"],
  [-37.91214925, 175.46909885, "37"],
  [-37.91408025, 175.4759690833, "91B"],
  [-37.9125366, 175.4691343, "38"],
  [-37.9134794833, 175.4739836167, "71A"],
  [-37.9122081167, 175.4674649333, "26A"],
  [-37.9140814333, 175.4736708667, "72A"],
  [-37.9120801, 175.4675947333, "26"],
  [-37.9113324167, 175.46512405, "4"],
  [-37.91185795, 175.4686138167, "31A"],
  [-37.9144403167, 175.4767387667, "101"],
  [-37.9125054167, 175.46896025, "36A"],
  [-37.9151334833, 175.4778022667, "106"],
  [-37.9126167833, 175.4688409667, "36B"],
  [-37.9111576, 175.4663765167, "13A"],
  [-37.9112960833, 175.4662379, "13"],
  [-37.9116252167, 175.46602135, "14"],
  [-37.9113666167, 175.4664507833, "15"],
  [-37.9117068333, 175.466336, "16"],
  [-37.9114338333, 175.4666576, "17"],
  [-37.9119338667, 175.4665694167, "18A"],
  [-37.9117808333, 175.4665752, "18"],
  [-37.9110205, 175.4652438667, "3"],
  [-37.9110742833, 175.4654501167, "5"],
  [-37.9111370833, 175.4656566833, "7"],
  [-37.9111865833, 175.4658542667, "9"],
  [-37.9112390333, 175.46602075, "11"],
  [-37.9118135167, 175.46543705, "6A"],
  [-37.9118572167, 175.46556135, "6B"],
  [-37.91145615, 175.4655286, "6"],
  [-37.9115389167, 175.4657957167, "8"],
  [-37.9127748333, 175.4699760667, "40"],
  [-37.9125127167, 175.4703133, "43"],
  [-37.9129274, 175.4704172833, "44"],
  [-37.9125759833, 175.4705303667, "45"],
  [-37.9129758667, 175.4706118, "46"],
  [-37.9126359667, 175.4707644, "47"],
  [-37.91226225, 175.47106665, "49"],
  [-37.9130937833, 175.4709588833, "50"],
  [-37.9131644667, 175.4711523, "52"],
  [-37.9132299667, 175.4713462167, "60"],
  [-37.9127690833, 175.4712279667, "53"],
  [-37.9133607167, 175.4730695833, "65"],
  [-37.91367805, 175.4728816667, "66"],
  [-37.9134211, 175.4732760667, "67"],
  [-37.9137477833, 175.4731176, "68"],
  [-37.9138932333, 175.4736511667, "70"],
  [-37.9135950667, 175.4738879833, "71"],
  [-37.9139430167, 175.4737982333, "72"],
  [-37.9136486, 175.4740868667, "73"],
  [-37.91400415, 175.4740125833, "74"],
  [-37.9140350333, 175.4741693833, "76"],
  [-37.91432385, 175.475081, "82"],
  [-37.9139975333, 175.47523055, "83"],
  [-37.9143889667, 175.47526065, "84"],
  [-37.9137640333, 175.47575135, "87"],
  [-37.91449875, 175.4756521167, "88"],
  [-37.9141123, 175.4756848833, "89"],
  [-37.9145492167, 175.4758458667, "90"]];
// const heatmapData = [
//   [37.7749, -122.4194, 50],
//   // [37.4419, -122.143, 30],
//   // [38.5816, -121.4944, 10],
//   // [37.6879, -122.47, 20],
//   // [37.3688, -122.0363, 15],
//   // [37.7749, -122.4194, 40],
//   // [37.4419, -122.143, 25],
//   // [38.5816, -121.4944, 8],
//   // [37.6879, -122.47, 15],
//   // [37.3688, -122.0363, 10],

//   [51.505, -0.09, 0.1],
//   [51.106, -0.08, 0.5],
//   [51.507, -0.07, 0.3],
//   [51.505, -0.09, 0.1],
//   [51.508, -0.07, 0.2],
//   [51.509, -0.06, 0.7],
//   [51.507, -0.08, 0.4],
//   [51.504, -0.07, 0.6],
//   [51.503, -0.09, 0.3],
//   [51.506, -0.06, 0.2],

//   [40.7128, -74.006, 100],
//   [34.0522, -118.2437, 80],
//   [41.8781, -87.6298, 70],
//   [29.7604, -95.3698, 60],
//   [42.3601, -71.0589, 50],
//   [32.7157, -117.1611, 40],
//   [39.9526, -75.1652, 30],
//   [33.4484, -112.074, 20],
//   [47.6062, -122.3321, 10],
//   [38.9072, -77.0369, 5],

//   [19.076, 72.8777, 50], // Mumbai
//   [19.041, 73.0777, 10], // Mumbai
//   [19.066, 73.8077, 20], // Mumbai
//   [19.076, 73.3077, 30], // Mumbai
//   [28.7041, 77.1025, 40], // Delhi
//   [12.9716, 77.5946, 30], // Bangalore
//   [22.5726, 88.3639, 20], // Kolkata
//   [13.0827, 80.2707, 10], // Chennai
//   [26.9124, 75.7873, 5], // Jaipur
//   [17.385, 78.4867, 5], // Hyderabad
//   [22.7196, 75.8577, 2], // Indore
//   [19.076, 72.8777, 3]
// ];

const Heatmap = () => {
  const [position, setPosition] = useState([
    52.5981984642711,
    -0.26200987606836373
  ]);
  const [data, setData] = useState([]);
  const heatmapOptions = {
    radius: 20,
    blur: 20,
    maxZoom: 18,
    minOpacity: 0.5,
    maxOpacity: 1
  };

  useEffect(() => {
    setData(heatmapData);
  }, [data]);

  return (
    <div className="flex justify-center">
        <MapContainer
          center={[12.972442, 77.580643]}
          zoom={13}
          key={Math.random()}
          style={{ height: '65vh', width: '95%' }}
        >
          <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={data}
            longitudeExtractor={(point) => point[1]}
            latitudeExtractor={(point) => point[0]}
            key={Math.random() + Math.random()}
            intensityExtractor={(point) => parseFloat(point[2])}
            // max={100}
            {...heatmapOptions}
          />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      {/* </div> */}
    </div>
  );
}

export default Heatmap;