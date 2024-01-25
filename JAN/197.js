/**
 * 
 * 197. Rising Temperature
 * -------------------------------------------
 * 
 * 
 * SELECT weather.id   
 * FROM weather
 * JOIN weather AS yesterdayON 
 * DATEDIFF(weather.recordDate, yesterday.recordDate) = 1
 * AND weather.temperature > yesterday.temperature;
 * 
 * 
 *  */ 




/**
 * 
 * SELECT weather.id: Specifies that you want to select the id column from the weather table.

   FROM weather: Indicates that you are querying the weather table.

   JOIN weather AS yesterday: Joins the weather table with itself, using the alias yesterday for the second instance of the table.

   ON DATEDIFF(weather.recordDate, yesterday.recordDate) = 1: Specifies the condition for the join. It checks if the date difference between the recordDate in the current row and the recordDate in the yesterday alias is exactly 1 day.

    AND weather.temperature > yesterday.temperature: Adds an additional condition to the join, ensuring that the temperature in the current row is greater than the temperature on the previous day.

    The result is a list of id values from the weather table where the temperature is higher than the temperature on the previous day.
 */