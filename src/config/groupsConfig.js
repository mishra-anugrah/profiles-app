export const profilesGroupsConfig = [
  {
    title: "name",
    isUserDetails: true,
    fields: [
      {
        label: "Username",
        valueKey: "username",
      },
      {
        label: "e-mail",
        valueKey: "email",
      },
      {
        label: "Phone",
        valueKey: "phone",
      },
      {
        label: "Website",
        valueKey: "website",
      },
    ],
  },

  {
    title: "Company",
    isUserDetails: false,
    fields: [
      {
        label: "Name",
        valueKey: "company.name",
      },
      {
        label: "catchphrase",
        valueKey: "company.catchPhrase",
      },
      {
        label: "bs",
        valueKey: "company.bs",
      },
    ],
  },

  {
    title: "Address",
    isUserDetails: false,
    fields: [
      {
        label: "Street",
        valueKey: "address.street",
      },
      {
        label: "Suite",
        valueKey: "address.suite",
      },
      {
        label: "City",
        valueKey: "address.city",
      },

      {
        label: "Zipcode",
        valueKey: "address.zipcode",
      },
      {
        label: "map",
        valueKey: "address.geo",
      },
    ],
  },
];
