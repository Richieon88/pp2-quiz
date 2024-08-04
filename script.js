const questions = [
    { question: "What is the capital of Afghanistan?", options: ["Kabul", "Tehran", "Islamabad", "Baghdad"], answer: "Kabul" },
    { question: "What is the capital of Albania?", options: ["Tirana", "Skopje", "Pristina", "Podgorica"], answer: "Tirana" },
    { question: "What is the capital of Algeria?", options: ["Algiers", "Tunis", "Rabat", "Tripoli"], answer: "Algiers" },
    { question: "What is the capital of Andorra?", options: ["Andorra la Vella", "Barcelona", "Madrid", "Toulouse"], answer: "Andorra la Vella" },
    { question: "What is the capital of Angola?", options: ["Luanda", "Nairobi", "Kinshasa", "Maputo"], answer: "Luanda" },
    { question: "What is the capital of Antigua and Barbuda?", options: ["St. John's", "Kingston", "Nassau", "Roseau"], answer: "St. John's" },
    { question: "What is the capital of Argentina?", options: ["Buenos Aires", "Lima", "Santiago", "Montevideo"], answer: "Buenos Aires" },
    { question: "What is the capital of Armenia?", options: ["Yerevan", "Baku", "Tbilisi", "Ankara"], answer: "Yerevan" },
    { question: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Brisbane"], answer: "Canberra" },
    { question: "What is the capital of Austria?", options: ["Vienna", "Salzburg", "Graz", "Innsbruck"], answer: "Vienna" },
    { question: "What is the capital of Azerbaijan?", options: ["Baku", "Yerevan", "Tashkent", "Ashgabat"], answer: "Baku" },
    { question: "What is the capital of Bahamas?", options: ["Nassau", "Kingston", "Port-au-Prince", "Bridgetown"], answer: "Nassau" },
    { question: "What is the capital of Bahrain?", options: ["Manama", "Doha", "Riyadh", "Kuwait City"], answer: "Manama" },
    { question: "What is the capital of Bangladesh?", options: ["Dhaka", "New Delhi", "Colombo", "Kathmandu"], answer: "Dhaka" },
    { question: "What is the capital of Barbados?", options: ["Bridgetown", "Castries", "Georgetown", "St. George's"], answer: "Bridgetown" },
    { question: "What is the capital of Belarus?", options: ["Minsk", "Kyiv", "Vilnius", "Riga"], answer: "Minsk" },
    { question: "What is the capital of Belgium?", options: ["Brussels", "Amsterdam", "Luxembourg", "Paris"], answer: "Brussels" },
    { question: "What is the capital of Belize?", options: ["Belmopan", "Guatemala City", "Tegucigalpa", "San Salvador"], answer: "Belmopan" },
    { question: "What is the capital of Benin?", options: ["Porto-Novo", "Lomé", "Abuja", "Accra"], answer: "Porto-Novo" },
    { question: "What is the capital of Bhutan?", options: ["Thimphu", "Kathmandu", "New Delhi", "Dhaka"], answer: "Thimphu" },
    { question: "What is the capital of Bolivia?", options: ["Sucre", "La Paz", "Quito", "Lima"], answer: "Sucre" },
    { question: "What is the capital of Bosnia and Herzegovina?", options: ["Sarajevo", "Zagreb", "Belgrade", "Ljubljana"], answer: "Sarajevo" },
    { question: "What is the capital of Botswana?", options: ["Gaborone", "Harare", "Windhoek", "Lusaka"], answer: "Gaborone" },
    { question: "What is the capital of Brazil?", options: ["Brasília", "São Paulo", "Rio de Janeiro", "Buenos Aires"], answer: "Brasília" },
    { question: "What is the capital of Brunei?", options: ["Bandar Seri Begawan", "Jakarta", "Kuala Lumpur", "Bangkok"], answer: "Bandar Seri Begawan" },
    { question: "What is the capital of Bulgaria?", options: ["Sofia", "Bucharest", "Belgrade", "Budapest"], answer: "Sofia" },
    { question: "What is the capital of Burkina Faso?", options: ["Ouagadougou", "Bamako", "Niamey", "Lomé"], answer: "Ouagadougou" },
    { question: "What is the capital of Burundi?", options: ["Gitega", "Bujumbura", "Kigali", "Nairobi"], answer: "Gitega" },
    { question: "What is the capital of Côte d'Ivoire?", options: ["Yamoussoukro", "Abidjan", "Accra", "Bamako"], answer: "Yamoussoukro" },
    { question: "What is the capital of Cabo Verde?", options: ["Praia", "Bissau", "Dakar", "Nouakchott"], answer: "Praia" },
    { question: "What is the capital of Cambodia?", options: ["Phnom Penh", "Vientiane", "Bangkok", "Hanoi"], answer: "Phnom Penh" },
    { question: "What is the capital of Cameroon?", options: ["Yaoundé", "Libreville", "Brazzaville", "Malabo"], answer: "Yaoundé" },
    { question: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa" },
    { question: "What is the capital of Central African Republic?", options: ["Bangui", "N'Djamena", "Juba", "Kinshasa"], answer: "Bangui" },
    { question: "What is the capital of Chad?", options: ["N'Djamena", "Bangui", "Khartoum", "Niamey"], answer: "N'Djamena" },
    { question: "What is the capital of Chile?", options: ["Santiago", "Buenos Aires", "Lima", "Montevideo"], answer: "Santiago" },
    { question: "What is the capital of China?", options: ["Beijing", "Shanghai", "Hong Kong", "Taipei"], answer: "Beijing" },
    { question: "What is the capital of Colombia?", options: ["Bogotá", "Lima", "Quito", "Caracas"], answer: "Bogotá" },
    { question: "What is the capital of Comoros?", options: ["Moroni", "Antananarivo", "Port Louis", "Victoria"], answer: "Moroni" },
    { question: "What is the capital of Congo (Congo-Brazzaville)?", options: ["Brazzaville", "Kinshasa", "Libreville", "Luanda"], answer: "Brazzaville" },
    { question: "What is the capital of Democratic Republic of the Congo?", options: ["Kinshasa", "Brazzaville", "Luanda", "Nairobi"], answer: "Kinshasa" },
    { question: "What is the capital of Costa Rica?", options: ["San José", "Managua", "Panama City", "San Salvador"], answer: "San José" },
    { question: "What is the capital of Croatia?", options: ["Zagreb", "Belgrade", "Ljubljana", "Sarajevo"], answer: "Zagreb" },
    { question: "What is the capital of Cuba?", options: ["Havana", "Santo Domingo", "San Juan", "Kingston"], answer: "Havana" },
    { question: "What is the capital of Cyprus?", options: ["Nicosia", "Athens", "Ankara", "Valletta"], answer: "Nicosia" },
    { question: "What is the capital of Czech Republic?", options: ["Prague", "Warsaw", "Bratislava", "Budapest"], answer: "Prague" },
    { question: "What is the capital of Denmark?", options: ["Copenhagen", "Oslo", "Stockholm", "Helsinki"], answer: "Copenhagen" },
    { question: "What is the capital of Djibouti?", options: ["Djibouti", "Asmara", "Mogadishu", "Addis Ababa"], answer: "Djibouti" },
    { question: "What is the capital of Dominica?", options: ["Roseau", "Bridgetown", "Castries", "St. George's"], answer: "Roseau" },
    { question: "What is the capital of Dominican Republic?", options: ["Santo Domingo", "San Juan", "Havana", "Kingston"], answer: "Santo Domingo" },
    { question: "What is the capital of Ecuador?", options: ["Quito", "Lima", "Bogotá", "Caracas"], answer: "Quito" },
    { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: "Cairo" },
    { question: "What is the capital of El Salvador?", options: ["San Salvador", "Tegucigalpa", "Managua", "San José"], answer: "San Salvador" },
    { question: "What is the capital of Equatorial Guinea?", options: ["Malabo", "Libreville", "Yaoundé", "Brazzaville"], answer: "Malabo" },
    { question: "What is the capital of Eritrea?", options: ["Asmara", "Djibouti", "Addis Ababa", "Khartoum"], answer: "Asmara" },
    { question: "What is the capital of Estonia?", options: ["Tallinn", "Riga", "Vilnius", "Helsinki"], answer: "Tallinn" },
    { question: "What is the capital of Eswatini?", options: ["Mbabane", "Maputo", "Harare", "Maseru"], answer: "Mbabane" },
    { question: "What is the capital of Ethiopia?", options: ["Addis Ababa", "Nairobi", "Khartoum", "Asmara"], answer: "Addis Ababa" },
    { question: "What is the capital of Fiji?", options: ["Suva", "Nuku'alofa", "Apia", "Port Vila"], answer: "Suva" },
    { question: "What is the capital of Finland?", options: ["Helsinki", "Stockholm", "Oslo", "Copenhagen"], answer: "Helsinki" },
    { question: "What is the capital of France?", options: ["Paris", "Lyon", "Marseille", "Nice"], answer: "Paris" },
    { question: "What is the capital of Gabon?", options: ["Libreville", "Brazzaville", "Yaoundé", "Kinshasa"], answer: "Libreville" },
    { question: "What is the capital of Gambia?", options: ["Banjul", "Dakar", "Bissau", "Conakry"], answer: "Banjul" },
    { question: "What is the capital of Georgia?", options: ["Tbilisi", "Yerevan", "Baku", "Ankara"], answer: "Tbilisi" },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Frankfurt", "Hamburg"], answer: "Berlin" },
    { question: "What is the capital of Ghana?", options: ["Accra", "Abuja", "Lagos", "Kumasi"], answer: "Accra" },
    { question: "What is the capital of Greece?", options: ["Athens", "Thessaloniki", "Nicosia", "Ankara"], answer: "Athens" },
    { question: "What is the capital of Grenada?", options: ["St. George's", "Bridgetown", "Castries", "Roseau"], answer: "St. George's" },
    { question: "What is the capital of Guatemala?", options: ["Guatemala City", "San Salvador", "Tegucigalpa", "Managua"], answer: "Guatemala City" },
    { question: "What is the capital of Guinea?", options: ["Conakry", "Bissau", "Dakar", "Banjul"], answer: "Conakry" },
    { question: "What is the capital of Guinea-Bissau?", options: ["Bissau", "Conakry", "Dakar", "Banjul"], answer: "Bissau" },
    { question: "What is the capital of Guyana?", options: ["Georgetown", "Paramaribo", "Cayenne", "Caracas"], answer: "Georgetown" },
    { question: "What is the capital of Haiti?", options: ["Port-au-Prince", "Santo Domingo", "Kingston", "Havana"], answer: "Port-au-Prince" },
    { question: "What is the capital of Honduras?", options: ["Tegucigalpa", "San Salvador", "Managua", "Guatemala City"], answer: "Tegucigalpa" },
    { question: "What is the capital of Hungary?", options: ["Budapest", "Bucharest", "Prague", "Bratislava"], answer: "Budapest" },
    { question: "What is the capital of Iceland?", options: ["Reykjavik", "Oslo", "Copenhagen", "Stockholm"], answer: "Reykjavik" },
    { question: "What is the capital of India?", options: ["New Delhi", "Mumbai", "Bangalore", "Kolkata"], answer: "New Delhi" },
    { question: "What is the capital of Indonesia?", options: ["Jakarta", "Kuala Lumpur", "Bangkok", "Hanoi"], answer: "Jakarta" },
    { question: "What is the capital of Iran?", options: ["Tehran", "Baghdad", "Riyadh", "Ankara"], answer: "Tehran" },
    { question: "What is the capital of Iraq?", options: ["Baghdad", "Tehran", "Riyadh", "Damascus"], answer: "Baghdad" },
    { question: "What is the capital of Ireland?", options: ["Dublin", "Belfast", "Edinburgh", "London"], answer: "Dublin" },
    { question: "What is the capital of Israel?", options: ["Jerusalem", "Tel Aviv", "Amman", "Beirut"], answer: "Jerusalem" },
    { question: "What is the capital of Italy?", options: ["Rome", "Milan", "Naples", "Turin"], answer: "Rome" },
    { question: "What is the capital of Jamaica?", options: ["Kingston", "Nassau", "Havana", "Port-au-Prince"], answer: "Kingston" },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"], answer: "Tokyo" },
    { question: "What is the capital of Jordan?", options: ["Amman", "Beirut", "Damascus", "Jerusalem"], answer: "Amman" },
    { question: "What is the capital of Kazakhstan?", options: ["Nur-Sultan", "Almaty", "Bishkek", "Tashkent"], answer: "Nur-Sultan" },
    { question: "What is the capital of Kenya?", options: ["Nairobi", "Kampala", "Addis Ababa", "Dar es Salaam"], answer: "Nairobi" },
    { question: "What is the capital of Kiribati?", options: ["Tarawa", "Nauru", "Majuro", "Funafuti"], answer: "Tarawa" },
    { question: "What is the capital of Kuwait?", options: ["Kuwait City", "Doha", "Riyadh", "Manama"], answer: "Kuwait City" },
    { question: "What is the capital of Kyrgyzstan?", options: ["Bishkek", "Tashkent", "Dushanbe", "Almaty"], answer: "Bishkek" },
    { question: "What is the capital of Laos?", options: ["Vientiane", "Hanoi", "Phnom Penh", "Bangkok"], answer: "Vientiane" },
    { question: "What is the capital of Latvia?", options: ["Riga", "Vilnius", "Tallinn", "Warsaw"], answer: "Riga" },
    { question: "What is the capital of Lebanon?", options: ["Beirut", "Amman", "Damascus", "Jerusalem"], answer: "Beirut" },
    { question: "What is the capital of Lesotho?", options: ["Maseru", "Bloemfontein", "Gaborone", "Mbabane"], answer: "Maseru" },
    { question: "What is the capital of Liberia?", options: ["Monrovia", "Freetown", "Accra", "Abuja"], answer: "Monrovia" },
    { question: "What is the capital of Libya?", options: ["Tripoli", "Benghazi", "Cairo", "Tunis"], answer: "Tripoli" },
    { question: "What is the capital of Liechtenstein?", options: ["Vaduz", "Zurich", "Vienna", "Munich"], answer: "Vaduz" },
    { question: "What is the capital of Lithuania?", options: ["Vilnius", "Riga", "Tallinn", "Warsaw"], answer: "Vilnius" },
    { question: "What is the capital of Luxembourg?", options: ["Luxembourg City", "Brussels", "Amsterdam", "Berlin"], answer: "Luxembourg City" },
    { question: "What is the capital of Madagascar?", options: ["Antananarivo", "Port Louis", "Victoria", "Maputo"], answer: "Antananarivo" },
    { question: "What is the capital of Malawi?", options: ["Lilongwe", "Lusaka", "Harare", "Kampala"], answer: "Lilongwe" },
    { question: "What is the capital of Malaysia?", options: ["Kuala Lumpur", "Jakarta", "Bangkok", "Hanoi"], answer: "Kuala Lumpur" },
    { question: "What is the capital of Maldives?", options: ["Malé", "Colombo", "Dhaka", "Kuala Lumpur"], answer: "Malé" },
    { question: "What is the capital of Mali?", options: ["Bamako", "Ouagadougou", "Niamey", "Dakar"], answer: "Bamako" },
    { question: "What is the capital of Malta?", options: ["Valletta", "Nicosia", "Athens", "Rome"], answer: "Valletta" },
    { question: "What is the capital of Marshall Islands?", options: ["Majuro", "Tarawa", "Palikir", "Apia"], answer: "Majuro" },
    { question: "What is the capital of Mauritania?", options: ["Nouakchott", "Bamako", "Dakar", "Niamey"], answer: "Nouakchott" },
    { question: "What is the capital of Mauritius?", options: ["Port Louis", "Victoria", "Antananarivo", "Maputo"], answer: "Port Louis" },
    { question: "What is the capital of Mexico?", options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"], answer: "Mexico City" },
    { question: "What is the capital of Micronesia?", options: ["Palikir", "Majuro", "Ngerulmud", "Funafuti"], answer: "Palikir" },
    { question: "What is the capital of Moldova?", options: ["Chișinău", "Bucharest", "Kyiv", "Sofia"], answer: "Chișinău" },
    { question: "What is the capital of Monaco?", options: ["Monaco", "Nice", "Cannes", "Menton"], answer: "Monaco" },
    { question: "What is the capital of Mongolia?", options: ["Ulaanbaatar", "Beijing", "Vladivostok", "Seoul"], answer: "Ulaanbaatar" },
    { question: "What is the capital of Montenegro?", options: ["Podgorica", "Sarajevo", "Belgrade", "Tirana"], answer: "Podgorica" },
    { question: "What is the capital of Morocco?", options: ["Rabat", "Casablanca", "Marrakesh", "Fez"], answer: "Rabat" },
    { question: "What is the capital of Mozambique?", options: ["Maputo", "Harare", "Lusaka", "Lilongwe"], answer: "Maputo" },
    { question: "What is the capital of Myanmar (Burma)?", options: ["Naypyidaw", "Yangon", "Bangkok", "Hanoi"], answer: "Naypyidaw" },
    { question: "What is the capital of Namibia?", options: ["Windhoek", "Gaborone", "Harare", "Lusaka"], answer: "Windhoek" },
    { question: "What is the capital of Nauru?", options: ["Yaren District", "Majuro", "Tarawa", "Ngerulmud"], answer: "Yaren District" },
    { question: "What is the capital of Nepal?", options: ["Kathmandu", "Thimphu", "Dhaka", "New Delhi"], answer: "Kathmandu" },
    { question: "What is the capital of Netherlands?", options: ["Amsterdam", "Brussels", "Berlin", "Copenhagen"], answer: "Amsterdam" },
    { question: "What is the capital of New Zealand?", options: ["Wellington", "Auckland", "Christchurch", "Dunedin"], answer: "Wellington" },
    { question: "What is the capital of Nicaragua?", options: ["Managua", "San José", "Tegucigalpa", "San Salvador"], answer: "Managua" },
    { question: "What is the capital of Niger?", options: ["Niamey", "Ouagadougou", "Bamako", "Abuja"], answer: "Niamey" },
    { question: "What is the capital of Nigeria?", options: ["Abuja", "Lagos", "Accra", "Nairobi"], answer: "Abuja" },
    { question: "What is the capital of North Korea?", options: ["Pyongyang", "Seoul", "Beijing", "Tokyo"], answer: "Pyongyang" },
    { question: "What is the capital of North Macedonia?", options: ["Skopje", "Belgrade", "Sofia", "Tirana"], answer: "Skopje" },
    { question: "What is the capital of Norway?", options: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"], answer: "Oslo" },
    { question: "What is the capital of Oman?", options: ["Muscat", "Doha", "Abu Dhabi", "Riyadh"], answer: "Muscat" },
    { question: "What is the capital of Pakistan?", options: ["Islamabad", "Karachi", "Lahore", "Peshawar"], answer: "Islamabad" },
    { question: "What is the capital of Palau?", options: ["Ngerulmud", "Koror", "Majuro", "Port Moresby"], answer: "Ngerulmud" },
    { question: "What is the capital of Palestine?", options: ["Jerusalem", "Ramallah", "Gaza", "Hebron"], answer: "Jerusalem" },
    { question: "What is the capital of Panama?", options: ["Panama City", "San José", "Managua", "Tegucigalpa"], answer: "Panama City" },
    { question: "What is the capital of Papua New Guinea?", options: ["Port Moresby", "Honiara", "Suva", "Apia"], answer: "Port Moresby" },
    { question: "What is the capital of Paraguay?", options: ["Asunción", "Buenos Aires", "Montevideo", "La Paz"], answer: "Asunción" },
    { question: "What is the capital of Peru?", options: ["Lima", "Quito", "Bogotá", "Santiago"], answer: "Lima" },
    { question: "What is the capital of Philippines?", options: ["Manila", "Jakarta", "Bangkok", "Kuala Lumpur"], answer: "Manila" },
    { question: "What is the capital of Poland?", options: ["Warsaw", "Prague", "Budapest", "Vienna"], answer: "Warsaw" },
    { question: "What is the capital of Portugal?", options: ["Lisbon", "Madrid", "Barcelona", "Rome"], answer: "Lisbon" },
    { question: "What is the capital of Qatar?", options: ["Doha", "Riyadh", "Abu Dhabi", "Kuwait City"], answer: "Doha" },
    { question: "What is the capital of Romania?", options: ["Bucharest", "Sofia", "Belgrade", "Budapest"], answer: "Bucharest" },
    { question: "What is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kazan", "Novosibirsk"], answer: "Moscow" },
    { question: "What is the capital of Rwanda?", options: ["Kigali", "Bujumbura", "Kampala", "Nairobi"], answer: "Kigali" },
    { question: "What is the capital of Saint Kitts and Nevis?", options: ["Basseterre", "Castries", "Bridgetown", "Kingstown"], answer: "Basseterre" },
    { question: "What is the capital of Saint Lucia?", options: ["Castries", "Bridgetown", "Kingstown", "Roseau"], answer: "Castries" },
    { question: "What is the capital of Saint Vincent and the Grenadines?", options: ["Kingstown", "Castries", "Bridgetown", "Roseau"], answer: "Kingstown" },
    { question: "What is the capital of Samoa?", options: ["Apia", "Nuku'alofa", "Suva", "Port Vila"], answer: "Apia" },
    { question: "What is the capital of San Marino?", options: ["San Marino", "Rome", "Florence", "Venice"], answer: "San Marino" },
    { question: "What is the capital of Sao Tome and Principe?", options: ["São Tomé", "Libreville", "Luanda", "Malabo"], answer: "São Tomé" },
    { question: "What is the capital of Saudi Arabia?", options: ["Riyadh", "Jeddah", "Mecca", "Medina"], answer: "Riyadh" },
    { question: "What is the capital of Senegal?", options: ["Dakar", "Banjul", "Bissau", "Conakry"], answer: "Dakar" },
    { question: "What is the capital of Serbia?", options: ["Belgrade", "Sarajevo", "Zagreb", "Podgorica"], answer: "Belgrade" },
    { question: "What is the capital of Seychelles?", options: ["Victoria", "Port Louis", "Antananarivo", "Maputo"], answer: "Victoria" },
    { question: "What is the capital of Sierra Leone?", options: ["Freetown", "Monrovia", "Accra", "Abuja"], answer: "Freetown" },
    { question: "What is the capital of Singapore?", options: ["Singapore", "Kuala Lumpur", "Jakarta", "Bangkok"], answer: "Singapore" },
    { question: "What is the capital of Slovakia?", options: ["Bratislava", "Prague", "Budapest", "Vienna"], answer: "Bratislava" },
    { question: "What is the capital of Slovenia?", options: ["Ljubljana", "Zagreb", "Belgrade", "Sarajevo"], answer: "Ljubljana" },
    { question: "What is the capital of Solomon Islands?", options: ["Honiara", "Port Moresby", "Apia", "Suva"], answer: "Honiara" },
    { question: "What is the capital of Somalia?", options: ["Mogadishu", "Addis Ababa", "Djibouti", "Nairobi"], answer: "Mogadishu" },
    { question: "What is the capital of South Africa?", options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"], answer: "Pretoria" },
    { question: "What is the capital of South Korea?", options: ["Seoul", "Pyongyang", "Tokyo", "Beijing"], answer: "Seoul" },
    { question: "What is the capital of South Sudan?", options: ["Juba", "Khartoum", "Nairobi", "Kampala"], answer: "Juba" },
    { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: "Madrid" },
    { question: "What is the capital of Sri Lanka?", options: ["Colombo", "Male", "Dhaka", "Kathmandu"], answer: "Colombo" },
    { question: "What is the capital of Sudan?", options: ["Khartoum", "Juba", "Cairo", "Addis Ababa"], answer: "Khartoum" },
    { question: "What is the capital of Suriname?", options: ["Paramaribo", "Georgetown", "Cayenne", "Caracas"], answer: "Paramaribo" },
    { question: "What is the capital of Sweden?", options: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"], answer: "Stockholm" },
    { question: "What is the capital of Switzerland?", options: ["Bern", "Zurich", "Geneva", "Basel"], answer: "Bern" },
    { question: "What is the capital of Syria?", options: ["Damascus", "Beirut", "Amman", "Baghdad"], answer: "Damascus" },
    { question: "What is the capital of Taiwan?", options: ["Taipei", "Beijing", "Hong Kong", "Seoul"], answer: "Taipei" },
    { question: "What is the capital of Tajikistan?", options: ["Dushanbe", "Bishkek", "Tashkent", "Almaty"], answer: "Dushanbe" },
    { question: "What is the capital of Tanzania?", options: ["Dodoma", "Nairobi", "Kampala", "Dar es Salaam"], answer: "Dodoma" },
    { question: "What is the capital of Thailand?", options: ["Bangkok", "Hanoi", "Phnom Penh", "Vientiane"], answer: "Bangkok" },
    { question: "What is the capital of Timor-Leste?", options: ["Dili", "Jakarta", "Kuala Lumpur", "Manila"], answer: "Dili" },
    { question: "What is the capital of Togo?", options: ["Lomé", "Accra", "Abuja", "Bamako"], answer: "Lomé" },
    { question: "What is the capital of Tonga?", options: ["Nuku'alofa", "Apia", "Suva", "Port Vila"], answer: "Nuku'alofa" },
    { question: "What is the capital of Trinidad and Tobago?", options: ["Port of Spain", "Bridgetown", "Castries", "Kingstown"], answer: "Port of Spain" },
    { question: "What is the capital of Tunisia?", options: ["Tunis", "Algiers", "Tripoli", "Cairo"], answer: "Tunis" },
    { question: "What is the capital of Turkey?", options: ["Ankara", "Istanbul", "Izmir", "Bursa"], answer: "Ankara" },
    { question: "What is the capital of Turkmenistan?", options: ["Ashgabat", "Tashkent", "Dushanbe", "Bishkek"], answer: "Ashgabat" },
    { question: "What is the capital of Tuvalu?", options: ["Funafuti", "Tarawa", "Majuro", "Nauru"], answer: "Funafuti" },
    { question: "What is the capital of Uganda?", options: ["Kampala", "Nairobi", "Kigali", "Bujumbura"], answer: "Kampala" },
    { question: "What is the capital of Ukraine?", options: ["Kyiv", "Minsk", "Warsaw", "Moscow"], answer: "Kyiv" },
    { question: "What is the capital of United Arab Emirates?", options: ["Abu Dhabi", "Dubai", "Doha", "Riyadh"], answer: "Abu Dhabi" },
    { question: "What is the capital of United Kingdom?", options: ["London", "Edinburgh", "Cardiff", "Belfast"], answer: "London" },
    { question: "What is the capital of United States?", options: ["Washington, D.C.", "New York", "Los Angeles", "Chicago"], answer: "Washington, D.C." },
    { question: "What is the capital of Uruguay?", options: ["Montevideo", "Buenos Aires", "Santiago", "Asunción"], answer: "Montevideo" },
    { question: "What is the capital of Uzbekistan?", options: ["Tashkent", "Bishkek", "Dushanbe", "Almaty"], answer: "Tashkent" },
    { question: "What is the capital of Vanuatu?", options: ["Port Vila", "Honiara", "Suva", "Apia"], answer: "Port Vila" },
    { question: "What is the capital of Vatican City?", options: ["Vatican City", "Rome", "Florence", "Naples"], answer: "Vatican City" },
    { question: "What is the capital of Venezuela?", options: ["Caracas", "Bogotá", "Quito", "Lima"], answer: "Caracas" },
    { question: "What is the capital of Vietnam?", options: ["Hanoi", "Ho Chi Minh City", "Bangkok", "Phnom Penh"], answer: "Hanoi" },
    { question: "What is the capital of Yemen?", options: ["Sana'a", "Aden", "Muscat", "Riyadh"], answer: "Sana'a" },
    { question: "What is the capital of Zambia?", options: ["Lusaka", "Harare", "Gaborone", "Windhoek"], answer: "Lusaka" },
    { question: "What is the capital of Zimbabwe?", options: ["Harare", "Lusaka", "Gaborone", "Maputo"], answer: "Harare" }
];

// Select 20 random questions
let currentQuestions = getRandomQuestions(20);
let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const scoreValueElement = document.getElementById("score-value");

function showQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    // Shuffle the options to randomize their order
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", selectOption);
        optionsContainer.appendChild(button);
    });

    // Hide the Next button initially
    nextButton.classList.add("hidden");
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions(num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function selectOption(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is ${correctAnswer}.`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    nextButton.classList.add("hidden");
    scoreElement.classList.remove("hidden");
    scoreValueElement.textContent = score;

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.id = "restart-button";
    restartButton.addEventListener("click", restartQuiz);
    optionsContainer.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestions = getRandomQuestions(20); // Get a new set of random questions
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.classList.add("hidden");
    showQuestion();
}

function startQuiz() {
    startScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
}

startButton.addEventListener("click", startQuiz);