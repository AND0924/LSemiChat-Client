import Layout from "../../components/layout/layout";
import { faSearch,faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState , MouseEvent, ChangeEvent, SyntheticEvent } from 'react';
import Link from 'next/link';
import { DEFAULT_IMAGE_PATH } from '../../constants/constant';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
interface SeachProps {
	id: string,
	image: string,
	user: string,
	comment:string,
	name: string,
	description: string,
	tag: string,
}

  
  // TODO: apiから取得する
const Show: Array<SeachProps> = [
	{
	  id: "1",
	  image: "",
	  user: "a",
	  comment: "comment hello",
	  name: "room name",
	  description: "discri1",
	  tag: "a",
	},
	{
		id: "2",
		image: "",
		user: "b",
		comment:"comment",
		name: "room name",
		description: "discri2",
		tag: "b",
	},
	{
	  id: "3",
	  image: "",
	  user: "c",
	  comment: "comment hello hello",
	  name: "room name",
	  description: "discri3",
	  tag: "c",
	},
	{
	  id: "4",
	  image: "",
	  user: "c",
	  comment: "comment comment hello",
	  name: "room name",
	  description: "discri4",
	  tag: "c",
	},
	{
	  id: "5",
	  image: "",
	  user: "c",
	  comment: "comment helloooooooo",
	  name: "room name",
	  description: "discri5",
	  tag: "c",
	},
	{
	  id: "6",
	  image: "",
	  user: "c",
	  comment: "comment comment hello hello hello",
	  name: "room name",
	  description: "discri6",
	  tag: "c",
	},
]
  
export default function RoomSeach() {
	const [shows, setshowlist] = useState(Show)
	const [keyword, setKeyword] = useState("")
  
	const handleSubmit = (evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
	  evt.preventDefault()
	  const _keyword = keyword
	  setKeyword("")
  
	}	
	  
  return (
	<Layout requiredAuth={true}>
		<div className="content-wrapper-serach">
		<div className="content">
			<div className="room-search">
			<div className="room-search-title">
				<h1 className="search">検索</h1>
			</div>
			<div className="enter-room-name">
				<form method="GET" className="search-form">
				<input type="text" name="key" autoComplete="off" value={keyword} onChange={(evt: ChangeEvent<HTMLInputElement>) => setKeyword(evt.target.value)} placeholder="search"/>
				<button type="submit" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
			</form>
		</div>
		<Tabs>
			<TabList>
				<Tab>User</Tab>
				<Tab>Room Name</Tab>
				<Tab>Tag</Tab>
			</TabList>

			<TabPanel> 
				<div tabTite="content_class">
					<ul className="user-list">
					{
					shows.map(show => (
						<li className="user-item" key={show.id}   >
						<Link href={`./${show.id}`}>
							<a className="user-link">
							<img src={show.image} className="avatar avatar-32 round border" onError={(evt: SyntheticEvent<HTMLImageElement, Event>) => evt.target.src=DEFAULT_IMAGE_PATH} />
							<h2 className="h3 user-name">{show.user}</h2>
							<div className="user-id">{show.id}</div>
							<div className="user-comment">{show.comment}</div>
							</a>
						</Link>
						</li>
					))
					}
					</ul>
				</div>
        	</TabPanel>
        	<TabPanel>
				<div tabTitle="content_class">
				<ul className="room-list">
					{
					shows.map(show => (
						<li className="room-item" key={show.id}>
						<Link href={`./${show.id}`}>
							<a className="room-link">
							<img src={show.image} className="avatar avatar-32 round border" onError={(evt: SyntheticEvent<HTMLImageElement, Event>) => evt.target.src=DEFAULT_IMAGE_PATH} />
							<h2 className="h3 room-name">{show.name}</h2>
							<div className="chat-board-description">{show.description}</div>
							<div className="room-tag">
							<FontAwesomeIcon icon={faTag} />
							<label>{show.tag}</label>
							</div>
							</a>
						</Link>
						</li>
					))
					}
					</ul>
				</div>
        	</TabPanel>
       		<TabPanel>
			<div tabTitle="content_class">
					<ul className="tag-list">
					{
					shows.map(show => (
						<li className="tag-item" key={show.id}>
						<Link href={`./${show.id}`}>
							<a className="room-link">
							<img src={show.image} className="avatar avatar-32 round border" onError={(evt: SyntheticEvent<HTMLImageElement, Event>) => evt.target.src=DEFAULT_IMAGE_PATH} />
							<h2 className="h3 tag-name">{show.name}</h2>
							<div className="chat-board-description">{show.description}</div>
							<div className="tag-tag">
							<FontAwesomeIcon icon={faTag} />
							<label>{show.tag}</label>
							</div>
							</a>
						</Link>
						</li>
					))
					}
					</ul>
				</div>
        		  </TabPanel>
				</Tabs>	
				</div>
			</div>
		</div>
    </Layout>
  );
}