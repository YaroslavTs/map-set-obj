var m_name = new Map();
var m_price = new Map();
var m_time = new Map();
m_name.set("First_Name", "First_Value_Name");
m_name.set("Second_Name", "Second_Value_Name");
m_name.set("Third_Name", "Third_Value_Name");
m_price.set(142, "First_Name");
m_price.set(376, "Second_Name");
m_price.set(727, "Third_Name");
m_time.set(41, "First_Name");
m_time.set(68, "Second_Name");
m_time.set(78, "Third_Name");
var a = 0;
var min_price, max_price;
var min_name_price, max_name_price;
var min_price_time, max_price_time;
var min_time, max_time;
var min_name_time, max_name_time;
var min_time_price, max_time_price;
for (let key of m_price.keys()){
    if (a === 0){
        a +=1;
        min_price = key;
        max_price = key;
        min_name_price = m_price.get(key);
        max_name_price = m_price.get(key);}
    else {
        if (max_price < key){
            max_price = key;
            max_name_price = m_price.get(key)}
        else if (min_price > key){
            min_price = key;
            min_name_price = m_price.get(key);
        }
    }
}
for (let key of m_time.keys()){
    if (m_time.get(key) === min_name_price){
        min_price_time = key;
    }
    else if (m_time.get(key) === max_name_price){
        max_price_time = key;
    }
}
var a = 0;
for (let key of m_time.keys()){
    if (a === 0){
        a +=1;
        min_time = key;
        max_time = key;
        min_name_time = m_time.get(key);
        max_name_time = m_time.get(key);
    }
    else {
        if (max_time < key){
            max_time = key;
            max_name_time = m_time.get(key)
        }
        else if (min_time > key){
            min_time = key;
            min_name_time = m_time.get(key);
        }
    }
}
for (let key of m_price.keys()){
    if (m_price.get(key) === min_name_time){
        min_time_price = key;
    }
    else if (m_price.get(key) === max_name_time){
        max_time_price = key;
    }
}
console.log(m_name.get(min_name_price) + ": " + min_price  + ", виробник: " + min_name_price + ", час на доставку: " + min_price_time);
console.log(m_name.get(max_name_price) + ": " + max_price  + ", виробник: " + max_name_price + ", час на доставку: " + max_price_time);
console.log(m_name.get(min_name_time) + ": " + min_time_price  + ", виробник: " + min_name_time + ", час на доставку: " + min_time);
console.log(m_name.get(max_name_time) + ": " + max_time_price  + ", виробник: " + max_name_time + ", час на доставку: " + max_time);