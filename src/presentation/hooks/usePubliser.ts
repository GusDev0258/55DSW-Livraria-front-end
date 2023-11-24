import { useEffect, useState } from "react"
import { PublisherModel } from "../../domain/models/publisher/publisher-model"
import { getAllPublishers } from "../../infra/http/request-publisher";

export const usePubliser = () => {
  const [publisherList, setPublisherList] = useState<PublisherModel[]>([]);
  useEffect(() => {
    getAllPublishers().then((publishers) => {
      if(publishers){
        setPublisherList(publishers)
      }
    }).catch((error) => console.log(error))
  },[])
  return { publisherList }
}
export default usePubliser;