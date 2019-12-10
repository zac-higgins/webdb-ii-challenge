
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: "WBAAV33421FU91768", make: "BMW", model: "3 Series", mileage: 100000, transmission: "Automatic", title: "Clean" },
        { vin: "SCBBR53W36C034889", make: "Bently", model: "Continental Flying Spur", mileage: 30000 },
        { vin: "1B4HS28N9YF105991", make: "Dodge", model: "Durango", mileage: 75000, transmission: "Automatic", title: "Salvage" },
        { vin: "KNDPBCA25B7076883", make: "KIA", model: "Sportage", mileage: 50000 },
      ]);
    });
};
