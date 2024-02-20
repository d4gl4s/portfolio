import ProjectTitle from "../components/ProjectTitle"
import ProjectDescription from "../components/ProjectDescription"
import Image from "next/image"

import forecasting from "@/public/forecasting.png"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pathfinder | Daglas Aitsen",
  description: "A pathfinding program that provides a visual representation of the shortest path between two distinct rooms within a building.",
}
const Page = () => {
  return (
    <main>
      <section className="w-[90%] max-w-[600px] xl:w-[50%] xl:max-w-[1000px] 2xl:w-[37%] m-auto mb-64">
        <ProjectTitle
          name="Housing market price analysis and prediction"
          authors="Daglas Aitsen, Johan Kirikal, Mihkel Jaas Karu"
          year={2023}
          github="https://github.com/jkirikal/housing-price-analysis-by-district"
        ></ProjectTitle>
        <ProjectDescription
          idea={true}
          problem="We were fascinated by the dynamics of the housing market and how economic factors contributed to its changes. Additionally, we wanted to compare different districts in terms of their affordability and attractiveness for potential buyers and renters. Our goals for this project were to visualize market trends and to potentially create a model that could predict housing prices based on various features."
          solution=""
          stack={["Python", "Matplotlib", "Numpy", "Tensorflow"]}
        />
        <h1 className=" font-bold text-[1.15em] mb-4">Delta X competition</h1>
        <p className=" mb-16">The project achieved third place in the 2023 Delta X Data Projects Competition, which featured a field of over 80 participants.</p>
        <h1 className=" font-bold text-[1.15em] mb-4">Collecting Data</h1>
        <p className=" mb-16">
          We chose to focus our analysis on Estonia's two largest cities, Tallinn and Tartu, ensuring sufficient data availability. Initially, we obtained geospatial maps for both cities to visualize
          the data. Additionally, we acquired three distinct time-series datasets to enhance our analysis. The first dataset, scraped using a Python script from Estonia’s leading real estate site,
          www.kv.ee, provided us with house prices, their locations, and sale dates, categorized by month and district from 2007 to 2023. The second dataset, openly available on the Statistics Estonia
          website, gave us insight into interest rates in Estonia. Lastly, we utilized data from Statistika Amet, which displayed average salaries in Tallinn and Tartu from 2007 to 2023. By
          integrating these datasets, we could effectively reflect changes in the housing market.
        </p>
        <h1 className=" font-bold text-[1.15em] mb-4">Time Series Forecasting Using an LSTM Model</h1>
        <p className=" mb-16">
          As my primary contribution to the project involved generating ideas, collecting data, and building the time series forecasting model, I will refrain from delving into the market analysis
          aspect of our work. For further details, please visit the project's GitHub page.
          <br></br>
          <br></br>
          As the concluding phase of our project, we sought to assess our ability to predict future average housing prices based on the data we had accumulated. After experimenting with a simple ARIMA
          model, I opted for a multivariate Long Short-Term Memory (LSTM) network to capture more intricacies and details from our historical data. The model incorporates housing prices, the number of
          housing advertisements, housing loan interest, and average salary differences over the past 60 months as features, producing a price prediction for the upcoming month. To optimize our
          model's performance, I conducted a manual grid search to identify the most effective hyperparameter values. The final network comprises 60 input nodes, an LSTM layer with 50 nodes, and two
          dense layers with 75 and 25 nodes, respectively. The accompanying plot illustrates one-shot forecasts for housing prices over the last 3 years. The average root mean square error for
          predictions is 100 €.
          <br></br>
          <br></br>
          The comprehensive Jupyter notebook code repository containing the detailed model-building process with comments can be accessed by clicking{" "}
          <Link href={"https://github.com/jkirikal/housing-price-analysis-by-district/blob/main/code/LSTM_model.ipynb"} className="text-emerald-500 underline font-semibold cursor-pointer">
            here
          </Link>
          . See the model prediction results below.
        </p>

        <Image className=" rounded-[10px] overflow-hidden mb-8 " alt="form" src={forecasting} />
        <h1 className=" font-bold text-[1.15em] mb-4 mt-20">Check Out The Project</h1>
        <p className="text-stone-700 text-[0.95em] font-medium ">
          If you are interested in exploring the project firsthand, you can visit the github repository{" "}
          <a className="underline text-emerald-500" href="https://github.com/jkirikal/housing-price-analysis-by-district" target="_blank">
            here
          </a>
          .
        </p>
      </section>
    </main>
  )
}

export default Page
