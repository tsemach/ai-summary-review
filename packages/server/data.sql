INSERT INTO review_summarizer.products (id, name, description, price) VALUES
(1, 'Ergonomic Office Chair', 'High-back ergonomic office chair with lumbar support and adjustable height.', 249.99),
(2, 'Noise Cancelling Headphones', 'Wireless over-ear headphones with active noise cancellation and 30 hours battery life.', 199.50),
(3, 'Smart Coffee Maker', 'Wi-Fi enabled coffee maker with programmable schedules and smartphone app integration.', 149.00),
(4, 'Mountain Bike', 'Lightweight aluminum frame mountain bike with 21-speed Shimano gear system.', 899.99),
(5, 'Air Purifier', 'HEPA-certified air purifier for medium to large rooms with real-time air quality monitoring.', 299.00);

INSERT INTO review_summarizer.reviews (author, rating, content, productId, createdAt) VALUES
('Alice Johnson', 5, 'I have been using this office chair for three weeks now, and it has made a huge difference in my daily comfort. The lumbar support is firm yet gentle, and I can sit for hours without back pain. The adjustable height and reclining function allow me to switch positions during long meetings, and the wheels glide smoothly on my hardwood floor.', 1, NOW()),
('Michael Roberts', 4, 'Overall, a very solid chair for the price. The cushioning is thick and supportive, though I wish the armrests had a bit more padding. Assembly was straightforward and took less than 20 minutes. It has improved my posture significantly while working from home.', 1, NOW()),
('Samantha Lee', 5, 'This chair is easily the best investment I have made for my home office. It feels sturdy, well-built, and provides excellent ergonomic support. I no longer have tension headaches after long workdays, and the mesh back keeps me cool.', 1, NOW()),
('David Wilson', 4, 'I like the chair overall, especially the headrest which helps with neck strain. The only reason I gave it four stars instead of five is that the seat is a bit firm, but I imagine it will break in over time. Highly recommend for remote workers.', 1, NOW()),
('Karen Smith', 5, 'Extremely comfortable and supportive. I was skeptical about buying an office chair online without trying it, but this one exceeded my expectations. The build quality is excellent, and I feel like it will last for years.', 1, NOW()),

('Brian Thompson', 5, 'The noise cancellation on these headphones is superb. I travel frequently, and they completely block out airplane engine noise, allowing me to focus on my music or podcasts. The sound quality is rich with strong bass and crisp highs.', 2, NOW()),
('Emily Davis', 4, 'Very comfortable to wear even for long listening sessions. The ear cushions are soft and breathable. Battery life is impressive, lasting me several days of use before recharging. The only downside is that the touch controls are a bit sensitive.', 2, NOW()),
('James Miller', 5, 'I use these headphones in my open office, and they help me tune out distractions and stay productive. The Bluetooth connection is stable, and switching between devices is seamless. Easily one of the best purchases I have made this year.', 2, NOW()),
('Olivia Martinez', 4, 'The sound profile is balanced and natural. They work great for both music and conference calls. The microphone picks up my voice clearly. I just wish the carrying case were slightly more compact for travel.', 2, NOW()),
('Daniel Anderson', 5, 'These headphones exceeded my expectations. I wear them for my daily commute, and they cut down subway noise almost entirely. The design feels premium and durable, and the charging is fast.', 2, NOW()),

('Jessica Brown', 5, 'This coffee maker has changed my mornings completely. I can set it the night before and wake up to freshly brewed coffee. The app integration is simple to use, and I love being able to adjust brew strength from my phone.', 3, NOW()),
('Matthew Clark', 4, 'Very convenient and reliable machine. The coffee tastes smooth and rich every time. I did have some trouble connecting it to my Wi-Fi initially, but once set up it has been flawless. Cleanup is also easy with the removable parts.', 3, NOW()),
('Sophia Hall', 5, 'I enjoy the scheduling feature the most. I set it to start brewing right before my alarm, and the aroma fills the kitchen when I wake up. It looks sleek on my countertop, and guests always ask about it.', 3, NOW()),
('Christopher Evans', 4, 'Great coffee maker with smart features, though the app could use some improvement. Sometimes it takes a few tries to send commands. The coffee quality itself is excellent and far better than my previous drip machine.', 3, NOW()),
('Rachel Turner', 5, 'I am very pleased with this coffee maker. The build feels sturdy, and it consistently produces hot, delicious coffee. The ability to control it remotely is a nice bonus, especially on lazy weekends.', 3, NOW()),

('Andrew Scott', 5, 'This mountain bike is outstanding. The gears shift smoothly, and the frame feels light yet durable. I took it on some rugged trails last weekend, and it handled steep climbs and rocky paths with ease.', 4, NOW()),
('Laura White', 4, 'Great bike overall with excellent performance. The seat is a little hard for long rides, so I might replace it, but otherwise it is a joy to ride. The brakes are responsive, and the tires grip well on dirt trails.', 4, NOW()),
('Kevin Harris', 5, 'I love how responsive this bike is. It feels fast and agile, and the suspension absorbs shocks well. Perfect for both casual rides and more challenging off-road trails. Highly recommend for beginners and seasoned riders alike.', 4, NOW()),
('Natalie Lewis', 4, 'The bike was easy to assemble, and everything feels solid. The paint job is sleek, and the gear system is smooth. My only complaint is that the pedals feel a bit basic, but that is an easy upgrade.', 4, NOW()),
('Ethan Walker', 5, 'Fantastic value for the quality you get. It rides smoothly, and I have already logged over 100 miles without issues. It inspires confidence on technical trails and downhill rides.', 4, NOW()),

('Chloe Adams', 5, 'This air purifier has made a noticeable difference in the air quality in my living room. I suffer from allergies, and within a few days of using it, I noticed reduced sneezing and congestion. The real-time air quality display is very helpful.', 5, NOW()),
('Joshua Young', 4, 'The purifier runs quietly on low settings, and the turbo mode quickly clears the air after cooking. The filters are easy to replace. It is slightly bulky, but the performance makes up for the size.', 5, NOW()),
('Hannah King', 5, 'Excellent product for anyone with pets. I have two cats, and this purifier has drastically reduced odors and airborne fur. The interface is intuitive, and the automatic mode adjusts fan speed intelligently.', 5, NOW()),
('Benjamin Wright', 4, 'It does a great job cleaning the air, though I wish it had smart home integration. Otherwise, it is reliable, efficient, and has already improved my sleep quality.', 5, NOW()),
('Megan Baker', 5, 'I am very satisfied with this purchase. The purifier is powerful and noticeably reduces dust accumulation in my apartment. It is quiet enough to run overnight in the bedroom without disturbing my sleep.', 5, NOW());
