BEGIN;

DROP TABLE IF EXISTS image CASCADE;

CREATE TABLE image (
     id         SERIAL PRIMARY KEY,
     url       TEXT NOT NULL,
     description  TEXT NOT NULL
);

INSERT INTO image(url,description) VALUES
('https://s.ftcdn.net/r/v2013/91af01f6330506aa8ca8baed9e4b4e4e7947b430/pics/all/page/interception/galeries-travel.jpg',
  "There is a beautiful image"),
('https://t4.ftcdn.net/jpg/01/94/82/79/240_F_194827982_vFcthNvwokiEdHkyPHwpCPJCQ35tBBtw.jpg',
  "Tourist woman walking sightseeing Lofoten islands in Norway Travel lifestyle concept adventure outdoor summer vacations girl backpacker");

COMMIT;
