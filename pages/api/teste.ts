// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Telnet } from "telnet-client";

type Data = {
  name?: string | string[];
  error?: string | unknown;
  telnet?: Telnet;
};

export default async function teste(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {  
  // async function teste () {
  //   const connection = new Telnet();

  //   // these parameters are just examples and most probably won't work for your use-case.
  //   const params = {
  //     host: "10.24.29.130",
  //     port: 23,
  //     // shellPrompt: "/ # ", // or negotiationMandatory: fals
  //     username: "sim",
  //     password: "sim@774858",
  //     timeout: 150000,
  //   };

  //   try {
  //     await connection.connect(params);
  //   } catch (error) {
  //     console.log("error", error);
  //     return res.status(200).json({ error }); 
  //   }

  //   const ress = await connection.exec("show onu info 8"); 
  //   console.log("async result:", ress);
    

  //   res.status(200).json({ name: ress });
  // };

  // teste();

  res.status(200).json({
    name: req.query.name + ' John Doe' || 'John Doe',
    telnet: new Telnet().on('data', (data) => {
      console.log(data);
    }),
  });
}
