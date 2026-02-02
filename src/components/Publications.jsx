import React, { useState } from 'react';
import { Starfield } from '../App';
import '../styles/Publications.css';

const Publications = () => {
  const [selectedLab, setSelectedLab] = useState('All');

  const labs = ['All', 'Computer Vision', 'Deep Learning', 'Autonomous Systems', 'Robotics', 'Biomedical Informatics'];

  const publications = [
    {
      id: 1,
      title: 'A survey of the recent architectures of deep convolutional neural networks',
      authors: 'Asifullah Khan, Anabia Sohail, Umme Zahoora, Aqsa Saeed Qureshi',
      journal: 'Artificial intelligence review',
      year: 2026,
      lab: 'Deep Learning',
      abstract: 'Deep Convolutional Neural Network (CNN) is a special type of Neural Networks, which has shown exemplary performance on several competitions related to Computer Vision and Image Processing. Some of the exciting application areas of CNN include Image Classification and Segmentation, Object Detection, Video Processing, Natural Language Processing, and Speech Recognition. The powerful learning ability of deep CNN is primarily due to the use of multiple feature extraction stages that can automatically learn representations from the data. The availability of a large amount of data and improvement in the hardware technology has accelerated the research in CNNs, and recently interesting deep CNN architectures have been reported. Several inspiring ideas to bring advancements in CNNs have been explored, such as the use of different activation and loss functions, parameter optimization, regularization, and architectural innovations. However, the significant improvement in the representational capacity of the deep CNN is achieved through architectural innovations. Notably, the ideas of exploiting spatial and channel information, depth and width of architecture, and multi-path information processing have gained substantial attention. Similarly, the idea of using a block of layers as a structural unit is also gaining popularity. This survey thus focuses on the intrinsic taxonomy present in the recently reported deep CNN architectures and, consequently, classifies the recent innovations in CNN architectures into seven different categories. These seven categories are based on spatial exploitation, depth, multi-path, width, feature-map exploitation, channel boosting, and attention. Additionally, the elementary understanding of CNN components, current challenges, and applications of CNN are also provided.',
      doi: 'https://doi.org/10.1109/TVCG.2024.1234567'
    },
    
    {
      id: 2,
      title: 'A survey of the recent architectures of deep convolutional neural networks',
      authors: 'Asifullah Khan, Anabia Sohail, Umme Zahoora & Aqsa Saeed Qureshi ',
      journal: 'Artificial intelligence review',
      year: 2020,
      lab: 'Deep Learning',
      abstract: 'Deep Convolutional Neural Network (CNN) is a special type of Neural Networks, which has shown exemplary performance on several competitions related to Computer Vision and Image Processing. Some of the exciting application areas of CNN include Image Classification and Segmentation, Object Detection, Video Processing, Natural Language Processing, and Speech Recognition. The powerful learning ability of deep CNN is primarily due to the use of multiple feature extraction stages that can automatically learn representations from the data. The availability of a large amount of data and improvement in the hardware technology has accelerated the research in CNNs, and recently interesting deep CNN architectures have been reported. Several inspiring ideas to bring advancements in CNNs have been explored, such as the use of different activation and loss functions, parameter optimization, regularization, and architectural innovations. However, the significant improvement in the representational capacity of the deep CNN is achieved through architectural innovations. Notably, the ideas of exploiting spatial and channel information, depth and width of architecture, and multi-path information processing have gained substantial attention. Similarly, the idea of using a block of layers as a structural unit is also gaining popularity. This survey thus focuses on the intrinsic taxonomy present in the recently reported deep CNN architectures and, consequently, classifies the recent innovations in CNN architectures into seven different categories. These seven categories are based on spatial exploitation, depth, multi-path, width, feature-map exploitation, channel boosting, and attention. Additionally, the elementary understanding of CNN components, current challenges, and applications of CNN are also provided.',
      doi: 'https://doi.org/10.1038/s42256-023-901234'
    },

    {
      id: 3,
      title: 'Wind power prediction using deep neural network based meta regression and transfer learning',
      authors: 'Aqsa Saeed Qureshi, Asifullah Khan, Aneela Zameer, Anila Usman',
      journal: 'Applied Soft Computing',
      year: 2017,
      lab: 'Deep Learning',
      abstract: 'An innovative short term wind power prediction system is proposed which exploits the learning ability of deep neural network based ensemble technique and the concept of transfer learning. In the proposed DNN-MRT scheme, deep auto-encoders act as base-regressors, whereas Deep Belief Network is used as a meta-regressor. Employing the concept of ensemble learning facilitates robust and collective decision on test data, whereas deep base and meta-regressors ultimately enhance the performance of the proposed DNN-MRT approach. The concept of transfer learning not only saves time required during training of a base-regressor on each individual wind farm dataset from scratch but also stipulates good weight initialization points for each of the wind farm for training. The effectiveness of the proposed, DNN-MRT technique is expressed by comparing statistical performance measures in terms of root mean squared error (RMSE), mean absolute error (MAE), and standard deviation error (SDE) with other existing techniques.',
      doi: 'https://www.sciencedirect.com/science/article/pii/S1568494617302946'
    },
    
    {
      id: 4,
      title: 'Recent Progress on Generative Adversarial Networks (GANs): A Survey',
      authors: 'Zhaoqing Pan, Weijie Yu, Xiaokai Yi, Asifullah Khan, Feng Yuan, Yuhui Zheng',
      journal: 'Journal of Artificial Intelligence Research',
      year: 2019,
      lab: 'Deep Learning',
      abstract: 'Generative adversarial network (GANs) is one of the most important research avenues in the field of artificial intelligence, and its outstanding data generation capacity has received wide attention. In this paper, we present the recent progress on GANs. First, the basic theory of GANs and the differences among different generative models in recent years were analyzed and summarized. Then, the derived models of GANs are classified and introduced one by one. Third, the training tricks and evaluation metrics were given. Fourth, the applications of GANs were introduced. Finally, the problem, we need to address, and future directions were discussed.',
      doi: 'https://ieeexplore.ieee.org/abstract/document/8667290'
    },
    {
      id: 5,
      title: 'Prediction of human breast and colon cancers from imbalanced data using nearest neighbor and support vector machines',
      authors: 'Abdul Majid, Safdar Ali, Mubashar Iqbal, Nabeela Kausar',
      journal: 'Computer methods and programs in biomedicine',
      year: 2014,
      lab: 'Biomedical Informatics',
      abstract: 'This study proposes a novel prediction approach for human breast and colon cancers using different feature spaces. The proposed scheme consists of two stages: the preprocessor and the predictor. In the preprocessor stage, the mega-trend diffusion (MTD) technique is employed to increase the samples of the minority class, thereby balancing the dataset. In the predictor stage, machine-learning approaches of K-nearest neighbor (KNN) and support vector machines (SVM) are used to develop hybrid MTD-SVM and MTD-KNN prediction models. MTD-SVM model has provided the best values of accuracy, G-mean and Matthews correlation coefficient of 96.71%, 96.70% and 71.98% for cancer/non-cancer dataset, breast/non-breast cancer dataset and colon/non-colon cancer dataset, respectively. We found that hybrid MTD-SVM is the best with respect to prediction performance and computational cost. MTD-KNN model has achieved moderately better prediction as compared to hybrid MTD-NB (Naïve Bayes) but at the expense of higher computing cost. MTD-KNN model is faster than MTD-RF (random forest) but its prediction is not better than MTD-RF. To the best of our knowledge, the reported results are the best results, so far, for these datasets. The proposed scheme indicates that the developed models can be used as a tool for the prediction of cancer. This scheme may be useful for study of any sequential information such as protein sequence or any nucleic acid sequence.',
      doi: 'https://doi.org/10.1109/TMI.2023.567890'
    },
    {
      id: 6,
      title: 'Lattice constant prediction of cubic and monoclinic perovskites using neural networks and support vector regression',
      authors: 'Abdul Majid, Asifullah Khan, Gibran Javed, Anwar M Mirza',
      journal: 'Computational materials science',
      year: 2010,
      lab: 'Biomedical Informatics',
      abstract: 'In the study of crystalline materials, the lattice constant (LC) of perovskites compounds play important role in the identification of materials. It reveals various interesting properties. In this study, we have employed Support Vector Regression, Artificial Neural Network, and Generalized Regression Neural Network based Computational Intelligent (CI) techniques to predict LC of cubic and monoclinic perovskites. Due to their interesting physiochemical properties, investigations in modeling the structural properties of perovskites have gained considerable attention. A dataset of a reasonable number of cubic and monoclinic perovskites are collected from the current literature. The CI techniques can efficiently correlate the LC of the perovskites materials with the ionic radii of constituent elements. A performance analysis of CI techniques is carried out with Multiple Linear Regression techniques, SPuDS software, and Density-Functional Theory. We have observed that the CI techniques yield accurate LC prediction as against the conventional approaches.',
      doi: 'https://www.sciencedirect.com/science/article/pii/S0927025610004970'
    },
    {
      id: 7,
      title: 'Machine learning based adaptive watermark decoding in view of anticipated attack',
      authors: 'Asifullah Khan, Syed Fahad Tahir, Abdul Majid, Tae-Sun Choi',
      journal: 'Pattern Recognition',
      year: 2008,
      lab: 'Biomedical Informatics',
      abstract: 'We present an innovative scheme of blindly extracting message bits when a watermarked image is distorted. In this scheme, we have exploited the capabilities of machine learning (ML) approaches for nonlinearly classifying the embedded bits. The proposed technique adaptively modifies the decoding strategy in view of the anticipated attack. The extraction of bits is considered as a binary classification problem. Conventionally, a hard decoder is used with the assumption that the underlying distribution of the discrete cosine transform coefficients do not change appreciably. However, in case of attacks related to real world applications of watermarking, such as JPEG compression in case of shared medical image warehouses, these coefficients are heavily altered. The sufficient statistics corresponding to the maximum likelihood based decoding process, which are considered as features in the proposed scheme, overlap at the receiving end, and a simple hard decoder fails to classify them properly. In contrast, our proposed ML decoding model has attained highest accuracy on the test data. Experimental results show that through its training phase, our proposed decoding scheme is able to cope with the alterations in features introduced by a new attack. Consequently, it achieves promising improvement in terms of bit correct ratio in comparison to the existing decoding scheme.',
      doi: 'https://www.sciencedirect.com/science/article/pii/S0031320308000101'
    },
    {
      id: 8,
      title: 'Lattice constant prediction of orthorhombic ABO3 perovskites using support vector machines',
      authors: 'Syed Gibran Javed, Asifullah Khan, Abdul Majid, Anwar M Mirza, J Bashir',
      journal: 'Computational materials science',
      year: 2007,
      lab: 'Biomedical Informatics',
      abstract: 'In this paper, a novel lattice constant prediction model based on support vector machine is proposed. In this proposed technique, advanced data set generation technique is also used which is helpful to develop fairly generalized prediction models. This enables us to achieve improved prediction performance of lattice constant of structurally known perovskites. Experimental results obtained using orthorhombic ABO3 perovskites demonstrate that our proposed prediction model is more efficient, robust and fast than those based on artificial neural networks.',
      doi: 'https://www.sciencedirect.com/science/article/pii/S0927025606002540'
    }
  ];

  const filteredPublications = selectedLab === 'All' 
    ? publications 
    : publications.filter(pub => pub.lab === selectedLab);

  return (
    <div className="publications">
      <Starfield />
      <div className="publications-container">
        {/* Header Section */}
        <div className="publications-header animate-fadeIn">
          <h1 className="publications-title animate-slideDown">
            Research Publications
          </h1>
          <p className="publications-subtitle animate-slideUp">
            Advancing AI Through Research and Innovation
          </p>
        </div>

        {/* Filter Section */}
        <div className="filter-section animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h3>Filter by Laboratory</h3>
          <div className="filter-buttons">
            {labs.map(lab => (
              <button
                key={lab}
                className={`filter-btn ${selectedLab === lab ? 'active' : ''}`}
                onClick={() => setSelectedLab(lab)}
              >
                {lab}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Count */}
        <div className="publications-count animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <p>Showing {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''}</p>
        </div>

        {/* Publications Grid */}
        <div className="publications-grid">
          {filteredPublications.map((pub, idx) => (
            <div
              key={pub.id}
              className="publication-card animate-slideUp"
              style={{ animationDelay: `${0.05 * idx}s` }}
            >
              <div className="publication-header">
                <div className="lab-badge">{pub.lab}</div>
                <div className="pub-year">{pub.year}</div>
              </div>

              <h3 className="publication-title">{pub.title}</h3>

              <div className="publication-authors">
                {pub.authors}
              </div>

              <div className="publication-journal">
                <strong>{pub.journal}</strong>
              </div>

              <p className="publication-abstract">
                {pub.abstract}
              </p>

              <div className="publication-footer">
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  View DOI →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="no-publications animate-fadeIn">
            <p>No publications found for this laboratory.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="publications-cta animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <h2>Interested in Our Research?</h2>
          <p>Contact us to learn more about our research projects and collaboration opportunities.</p>
          <a href="/contact" className="cta-btn primary">Get In Touch</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo-box">
              <img src="/paic-logo.png" alt="PAIC logo" />
            </div>
            <div className="footer-copy">© 2025 PIEAS Artificial Intelligence Center</div>
          </div>

          <div className="footer-right">
            <div className="follow-us">FOLLOW US</div>
            <div className="social-icons">
              <a className="social-btn" href="#" aria-label="facebook" title="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.07v-2.9h2.37V9.41c0-2.34 1.38-3.63 3.5-3.63. 1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.15 0-1.51.72-1.51 1.46v1.75h2.57l-.41 2.9h-2.16V22c4.78-.75 8.44-4.91 8.44-9.93z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="linkedin" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5v15H0v-15zM8.5 8.98h4.8v2.07h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.69v8.84h-5V17.1c0-2.02-.04-4.62-2.81-4.62-2.81 0-3.24 2.2-3.24 4.47v8.05h-5v-15z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="twitter" title="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.84-2.32 8.4 8.4 0 0 1-2.66 1.02 4.2 4.2 0 0 0-7.16 3.83A11.9 11.9 0 0 1 3.16 4.6a4.2 4.2 0 0 0 1.3 5.6c-.65-.02-1.26-.2-1.8-.5v.05c0 2.15 1.53 3.94 3.56 4.34-.37.1-.76.15-1.16.15-.28 0-.55-.03-.82-.08.55 1.7 2.15 2.94 4.05 2.98A8.43 8.43 0 0 1 2 19.54a11.9 11.9 0 0 0 6.45 1.89c7.74 0 11.98-6.41 11.98-11.98l-.01-.55A8.6 8.6 0 0 0 22.46 6z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="youtube" title="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1-2.9-.2-7.2-.2-7.2-.2h-.1s-4.3 0-7.2.2c-.4.1-1.3.1-2.1 1C1.2 4.5 1 6.2 1 6.2S.8 8 .8 9.8v.4C.8 12.8 1 14.6 1 14.6s.2 1.7.8 2.4c.8.9 1.8.9 2.3 1 1.7.1 7 .2 7.7.2h.1s4.3 0 7.2-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.8.2-3.6v-.4c0-1.8-.2-3.6-.2-3.6zM9.75 15.02V8.98l5.5 3.02-5.5 3.02z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="instagram" title="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.6a1.12 1.12 0 1 0 1.12 1.12A1.12 1.12 0 0 0 18.4 5.6zM12 15.2A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="android" title="Android">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.6 9.48c.05-.16.08-.33.08-.52A3.08 3.08 0 0 0 14.66 5H9.34A3.08 3.08 0 0 0 6.36 8.96c0 .19.03.36.08.52C4.26 10.02 2.5 11.71 2.5 13.77V18h19v-4.23c0-2.06-1.76-3.75-4.9-4.29z"/></svg>
              </a>
            </div>
            <div className="footer-links">
              <button className="footer-link" onClick={() => window.location.href = '/contact'}>CONTACT US</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Publications;
