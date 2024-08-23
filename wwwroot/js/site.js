﻿let cities = [
    {
        name: "Adana",
        famousFor: "Kebap",
        type: "food",
        plateNumber: "01"
    },
    {

        name: "Ankara",
        famousFor: "Simidi",
        type: "food",
        plateNumber: "06"
    },
    {
        name: "İstanbul",
        famousFor: "Boğaz",
        type: "place",
        plateNumber: "34"
    },
    {
        name: "İzmir",
        famousFor: "Boyoz",
        type: "food",
        plateNumber: "35"
    },
    {
        name: "Bursa",
        famousFor: "İskender Kebabı",
        type: "food",
        plateNumber: "16"
    },
    {
        name: "Antalya",
        famousFor: "Düden Şelalesi",
        type: "place",
        plateNumber: "07"
    },
    {
        name: "Gaziantep",
        famousFor: "Baklava",
        type: "food",
        plateNumber: "27"
    },
    {
        name: "Konya",
        famousFor: "Etli Ekmek",
        type: "food",
        plateNumber: "42"
    },
    {
        name: "Trabzon",
        famousFor: "Hamsi",
        type: "food",
        plateNumber: "61"
    },
    {
        name: "Kayseri",
        famousFor: "Mantı",
        type: "food",
        plateNumber: "38"
    },
    {
        name: "Eskişehir",
        famousFor: "Lületaşı",
        type: "place",
        plateNumber: "26"
    },
    {
        name: "Rize",
        famousFor: "Çay",
        type: "food",
        plateNumber: "53"
    },
    {
        name: "Erzurum",
        famousFor: "Cağ Kebabı",
        type: "food",
        plateNumber: "25"
    },
    {
        name: "Diyarbakır",
        famousFor: "Karpuz",
        type: "place",
        plateNumber: "21"
    },
    {
        name: "Mardin",
        famousFor: "Taş Evler",
        type: "place",
        plateNumber: "47"
    },
    {
        name: "Van",
        famousFor: "Van Kedisi",
        type: "place",
        plateNumber: "65"
    },
    {
        name: "Sivas",
        famousFor: "Kangal Köpeği",
        type: "place",
        plateNumber: "58"
    },
    {
        name: "Şanlıurfa",
        famousFor: "Balıklıgöl",
        type: "place",
        plateNumber: "63"
    },
    {
        name: "Mersin",
        famousFor: "Tantuni",
        type: "food",
        plateNumber: "33"
    },
    {
        name: "Muğla",
        famousFor: "Turistik Yerleri",
        type: "place",
        plateNumber: "48"
    },
    {
        name: "Çanakkale",
        famousFor: "Tarihi Gelibolu Yarımadası",
        type: "place",
        plateNumber: "17"
    },
    {
        name: "Hatay",
        famousFor: "Antakya Mozaikleri",
        type: "place",
        plateNumber: "31"
    },
    {
        name: "İzmir",
        famousFor: "Efes Antik Kenti",
        type: "place",
        plateNumber: "35"
    },
    {
        name: "Nevşehir",
        famousFor: "Kapadokya",
        type: "place",
        plateNumber: "50"
    },
    {
        name: "Aydın",
        famousFor: "Milet Antik Kenti",
        type: "place",
        plateNumber: "09"
    }
];

function renderCities(){
    for (let city of cities) {
        cityList.innerHTML += `<tr>
        <td>${city.name}</td>
        <td>${city.famousFor}</td>
        <td>${city.plateNumber}</td>
        </tr>`;

        if (city.type === "place") {
            placeList.innerHTML += `<tr>
        <td>${city.name}</td>
        <td>${city.famousFor}</td>
        </tr>`;
        }

        if (city.type === "food") {
            foodList.innerHTML += `<tr>
        <td>${city.name}</td>
        <td>${city.famousFor}</td>
        </tr>`;
        }

        if (city.plateNumber % 2 === 1) {
            singleList.innerHTML += `<tr>
        <td>${city.name}</td>
        <td>${city.plateNumber}</td>
        </tr>`;
        }

        if (city.plateNumber % 2 === 0) {
            pairList.innerHTML += `<tr>
        <td>${city.name}</td>
        <td>${city.plateNumber}</td>
        </tr>`;
        }
    }

}

renderCities();