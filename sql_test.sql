-- 4.1 SELECT ข้อมูลSTORE ที่มีR egion เป็น East
SELECT * FROM STORE
WHERE Region = 'East';
-- 4.2 SELECT ข้อมูล PRODUCT ที่มีขายใน STORE New York
SELECT p.*
FROM PRODUCT p
JOIN SALES_FACT sf ON p.product_key = sf.product_key
JOIN STORE s ON sf.store_key = s.store_key
WHERE s.city = 'New York';
-- 4.3 SELECT ยอดรวม Profit ของ STORE New York
SELECT SUM(sf.profit)
FROM SALES_FACT sf
JOIN PRODUCT p ON sf.product_key = p.product_key
JOIN STORE s ON s.store_key = sf.store_key
WHERE s.city = 'New York';
-- 4.4 DELETE ข้อมูล SALE_FACT ที่ PRODUCT มี Brand เป็น Wolf 
DELETE sf
FROM SALES_FACT sf
JOIN PRODUCT p ON sf.product_key = p.product_key
WHERE p.brand = 'Wolf';
-- 4.5 UPDATE Brand ของ PRODUCT ที่มี Description เป็น Toy Story ให้Brand เป็น W
UPDATE PRODUCT
SET Brand = "W"
WHERE Description = "Toy Story";