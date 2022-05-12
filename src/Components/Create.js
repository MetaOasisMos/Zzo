import vector from '../assets/images/Vector.png'

const Create = () => {
    return (
        <div className={'create-container'}>
            <div className="container">
                <p className={'create-container-text'}>Who Creates</p>
                <p className={'create-container-header'}>the Zzoopers?</p>
                <p className={'create-container-body'}>MetaOasis DAO, one of the first DAOs focusing on the investment and development of metaverse real
                    estate, together with Season Studio, a top-class metaverse designing house with 50+ seasoned 3D
                    voxel artists and creators.</p>
                <button className={'btn metaoasis-btn'}><img src={vector} style={{marginRight: 5}}/>Go to MetaOasis DAO</button>
            </div>
        </div>
    );
}

export default Create;