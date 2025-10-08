import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthAssessment from "@/components/GrowthAssessment";

const GrowthAssessmentPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <GrowthAssessment />
      </main>
      <Footer />
    </div>
  );
};

export default GrowthAssessmentPage;
