import {
	faBriefcase,
	faBuilding,
	faClock,
	faEnvelope,
	faExpand,
	faFileSignature,
	faHashtag,
	faLayerGroup,
	faMagnifyingGlass,
	faPlus,
	faPrint,
	faTrashCan,
	faUserCircle,
	faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function App() {
	// State for storing the list of print jobs, persisting to localStorage
	const [jobs, setJobs] = useState(() => {
		const saved = localStorage.getItem("rkdRetailPrintLogs");
		if (saved) {
			try {
				return JSON.parse(saved);
			} catch (e) {
				console.error("Failed to parse saved jobs from localStorage:", e);
				return [];
			}
		}
		return [];
	});

	// State for the form inputs
	const [formData, setFormData] = useState({
		taskName: "",
		size: "A4",
		paperType: "Standard",
		quantity: 1,
		forWhom: "",
		department: "",
		company: "",
		requesterEmail: "",
	});

	// State for search filtering
	const [searchTerm, setSearchTerm] = useState("");

	// Save to localStorage whenever jobs change
	useEffect(() => {
		localStorage.setItem("rkdRetailPrintLogs", JSON.stringify(jobs));
	}, [jobs]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newJob = {
			id: crypto.randomUUID(),
			...formData,
			timestamp: new Date().toLocaleString("en-US", {
				dateStyle: "medium",
				timeStyle: "short",
			}),
		};

		setJobs((prev) => [newJob, ...prev]);

		// Reset form to default values
		setFormData({
			taskName: "",
			size: "A4",
			paperType: "Standard",
			quantity: 1,
			forWhom: "",
			department: "",
			company: "",
			requesterEmail: "",
		});
	};

	const handleDelete = (id) => {
		setJobs((prev) => prev.filter((job) => job.id !== id));
	};

	// Filter jobs based on search term
	const filteredJobs = jobs.filter((job) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			job.taskName.toLowerCase().includes(searchLower) ||
			job.forWhom.toLowerCase().includes(searchLower) ||
			job.department.toLowerCase().includes(searchLower) ||
			job.company.toLowerCase().includes(searchLower) ||
			job.requesterEmail.toLowerCase().includes(searchLower)
		);
	});

	return (
		<div className="min-h-screen bg-[#f0f4f8] text-slate-800 font-sans selection:bg-[#00aeef] selection:text-white">
			{/* CMYK Brand Bar */}
			<div className="flex h-1.5 w-full">
				<div className="flex-1 bg-[#00aeef]"></div>
				<div className="flex-1 bg-[#ec008c]"></div>
				<div className="flex-1 bg-[#fff200]"></div>
				<div className="flex-1 bg-[#0056b3]"></div>
			</div>

			<div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
				{/* Header Section */}
				<header className="flex flex-col md:flex-row md:items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
					<div className="flex items-center space-x-4">
						<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#0056b3] to-[#00aeef] rounded-xl text-white shadow-md">
							<FontAwesomeIcon icon={faPrint} className="text-xl" />
						</div>
						<div>
							<h1 className="text-2xl md:text-3xl font-black text-[#0056b3] tracking-tight">
								Job Tracking System
							</h1>
							<p className="text-[#00aeef] font-bold text-sm uppercase tracking-wider mt-0.5">
								Daily Basis
							</p>
						</div>
					</div>

					<div className="mt-4 md:mt-0 flex items-center space-x-2 bg-slate-50 py-2 px-4 rounded-full border border-slate-100">
						<FontAwesomeIcon
							icon={faUserCircle}
							className="text-[#ec008c] text-lg"
						/>
						<span className="font-semibold text-slate-700">
							Operator: <span className="text-[#ec008c]">admin</span>
						</span>
					</div>
				</header>

				{/* Main Content Area */}
				<main className="space-y-8">
					{/* Form Section */}
					<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
						{/* Decorative accent */}
						<div className="absolute top-0 left-0 w-1 h-full bg-[#00aeef]"></div>

						<h2 className="text-lg font-bold mb-6 flex items-center text-[#0056b3] pb-4 border-b border-slate-100">
							<FontAwesomeIcon icon={faPlus} className="mr-3 text-[#00aeef]" />
							Add New Print Log
						</h2>

						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Row 1: Job Details & Specs */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
								{/* Task Name */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Job/Task Name
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faFileSignature} />
										</div>
										<input
											type="text"
											name="taskName"
											value={formData.taskName}
											onChange={handleInputChange}
											placeholder="e.g., Q3 Report"
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all"
											required
										/>
									</div>
								</div>

								{/* Size */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Size
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faExpand} />
										</div>
										<select
											name="size"
											value={formData.size}
											onChange={handleInputChange}
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm appearance-none focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all cursor-pointer">
											<option value="A5">A5</option>
											<option value="A4">A4</option>
											<option value="A3">A3</option>
											<option value="A2">A2</option>
											<option value="A1">A1</option>
											<option value="Letter">Letter</option>
											<option value="Legal">Legal</option>
											<option value="Custom">Custom</option>
										</select>
									</div>
								</div>

								{/* Paper Type */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Paper Type
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faLayerGroup} />
										</div>
										<select
											name="paperType"
											value={formData.paperType}
											onChange={handleInputChange}
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm appearance-none focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all cursor-pointer">
											<option value="Standard">Standard</option>
											<option value="Glossy">Glossy</option>
											<option value="Matte">Matte</option>
											<option value="Cardstock">Cardstock</option>
											<option value="Photo">Photo Paper</option>
										</select>
									</div>
								</div>

								{/* Quantity */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Quantity
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faHashtag} />
										</div>
										<input
											type="number"
											name="quantity"
											min="1"
											value={formData.quantity}
											onChange={handleInputChange}
											placeholder="1"
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all"
											required
										/>
									</div>
								</div>
							</div>

							{/* Row 2: Client/Requester Info */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
								{/* For Whom */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										For Whom
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faUserTie} />
										</div>
										<input
											type="text"
											name="forWhom"
											value={formData.forWhom}
											onChange={handleInputChange}
											placeholder="Name of recipient"
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all"
											required
										/>
									</div>
								</div>

								{/* Department */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Department
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faBriefcase} />
										</div>
										<input
											type="text"
											name="department"
											value={formData.department}
											onChange={handleInputChange}
											placeholder="e.g., Marketing"
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all"
											required
										/>
									</div>
								</div>

								{/* Company */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Company
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faBuilding} />
										</div>
										<input
											type="text"
											name="company"
											value={formData.company}
											onChange={handleInputChange}
											placeholder="e.g., Client ABC"
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all"
											required
										/>
									</div>
								</div>

								{/* Requester Email */}
								<div className="space-y-1.5">
									<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Requester Email
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
											<FontAwesomeIcon icon={faEnvelope} />
										</div>
										<input
											type="email"
											name="requesterEmail"
											value={formData.requesterEmail}
											onChange={handleInputChange}
											placeholder="email@example.com"
											className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all"
											required
										/>
									</div>
								</div>
							</div>

							{/* Submit Button */}
							<div className="flex justify-end pt-2">
								<button
									type="submit"
									className="bg-[#00aeef] hover:bg-[#0080c0] text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2 focus:ring-4 focus:ring-[#00aeef]/30 focus:outline-none">
									<FontAwesomeIcon icon={faPlus} />
									<span>Log Print Job</span>
								</button>
							</div>
						</form>
					</div>

					{/* Tracking List Section */}
					<div className="space-y-4">
						{/* Table Controls (Search) */}
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
							<h3 className="text-xl font-black text-[#0056b3]">Recent Logs</h3>
							<div className="relative w-full sm:max-w-xs">
								<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</div>
								<input
									type="text"
									placeholder="Search logs..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeef] focus:ring-1 focus:ring-[#00aeef] transition-all shadow-sm"
								/>
							</div>
						</div>

						{/* Data Table */}
						<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
							<div className="absolute top-0 left-0 w-1 h-full bg-[#ec008c]"></div>
							<div className="overflow-x-auto">
								<table className="w-full text-left border-collapse min-w-[950px]">
									<thead>
										<tr className="bg-slate-50 border-b border-slate-200">
											<th className="px-5 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
												Job Details
											</th>
											<th className="px-5 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
												Specs
											</th>
											<th className="px-5 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
												Client Info
											</th>
											<th className="px-5 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
												Contact
											</th>
											<th className="px-5 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider text-right">
												Action
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-slate-100">
										{filteredJobs.length === 0 ? (
											<tr>
												<td
													colSpan="5"
													className="px-6 py-12 text-center text-slate-400">
													<FontAwesomeIcon
														icon={faPrint}
														className="text-4xl mb-3 text-slate-200"
													/>
													<p className="text-base font-semibold text-slate-500">
														No print jobs found
													</p>
													<p className="text-sm mt-1">
														Submit the form above to add a new record.
													</p>
												</td>
											</tr>
										) : (
											filteredJobs.map((job) => (
												<tr
													key={job.id}
													className="hover:bg-slate-50 transition-colors group">
													<td className="px-5 py-4 align-middle">
														<p className="font-bold text-[#0056b3]">
															{job.taskName}
														</p>
														<div className="flex items-center text-xs text-slate-500 mt-1 font-medium">
															<FontAwesomeIcon
																icon={faClock}
																className="mr-1.5 text-slate-400"
															/>
															{job.timestamp}
														</div>
													</td>

													<td className="px-5 py-4 align-middle">
														<div className="flex flex-wrap gap-2">
															<span className="inline-flex items-center px-2 py-1 rounded bg-[#00aeef]/10 text-[#0080c0] text-xs font-bold border border-[#00aeef]/20">
																{job.size}
															</span>
															<span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
																{job.paperType}
															</span>
															<span className="inline-flex items-center px-2 py-1 rounded bg-[#fff200]/20 text-yellow-700 text-xs font-bold border border-[#fff200]/40">
																Qty: {job.quantity}
															</span>
														</div>
													</td>

													<td className="px-5 py-4 align-middle">
														<p className="text-slate-800 font-semibold flex items-center">
															<FontAwesomeIcon
																icon={faUserTie}
																className="mr-2 text-slate-400 text-xs"
															/>
															{job.forWhom}
														</p>
														<p className="text-xs text-slate-500 mt-1 font-medium">
															<FontAwesomeIcon
																icon={faBuilding}
																className="mr-1.5 text-slate-400"
															/>
															<span className="text-slate-700">
																{job.company}
															</span>{" "}
															<span className="mx-1 text-slate-300">|</span>{" "}
															{job.department}
														</p>
													</td>

													<td className="px-5 py-4 align-middle">
														<a
															href={`mailto:${job.requesterEmail}`}
															className="inline-flex items-center text-sm font-medium text-[#ec008c] hover:text-[#c40074] transition-colors">
															<FontAwesomeIcon
																icon={faEnvelope}
																className="mr-1.5 text-[#ec008c]/70"
															/>
															{job.requesterEmail}
														</a>
													</td>

													<td className="px-5 py-4 align-middle text-right">
														<button
															onClick={() => handleDelete(job.id)}
															className="inline-flex items-center justify-center w-8 h-8 text-slate-300 hover:text-white hover:bg-[#ec008c] rounded bg-white border border-slate-200 hover:border-[#ec008c] transition-all focus:outline-none opacity-100 sm:opacity-0 group-hover:opacity-100 shadow-sm"
															title="Delete Job">
															<FontAwesomeIcon icon={faTrashCan} />
														</button>
													</td>
												</tr>
											))
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
